<?php

namespace App\Repositories;

use App\Exceptions\AttachmentNotFoundException;
use App\Exceptions\ResourceManipulationException;
use App\Exceptions\UploadErrorException;
use App\Image;
use App\Interfaces\AttachmentInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Response;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class ImageRepository implements AttachmentInterface
{


    private $app_path = 'app\uploads\\';
    private $uploads_path = 'uploads\\';
    private $folder_name = 'images';
    private $full_path;

    /**
     * ImageRepository constructor.
     */
    public function __construct()
    {
        $this->full_path = $this->app_path . $this->folder_name . '\\';
    }


    /**
     * @param UploadedFile $attachment
     * @return array
     * @throws UploadErrorException
     */
    public function upload(UploadedFile $attachment)
    {
        $extension = $attachment->getClientOriginalExtension();
        $filename = $this->folder_name . '_' . time() . mt_rand();
        $allowed_filename = $this->createUniqueFilename($filename, $extension);
        $response = $this->original($attachment, $allowed_filename);
        if ($response) {
            return [
                'status' => true,
                'file_name' => $allowed_filename,
                'display_name' => $attachment->getClientOriginalName(),
                'size' => $attachment->getSize(),
                'extension' => $extension,
            ];
        }
        throw  new UploadErrorException(__('lang.uploading_error_exception'), UPLOADING_ERROR);
    }


    /**
     * @param Model $model
     * @param $response
     * @return \Illuminate\Database\Eloquent\Model
     * @throws ResourceManipulationException
     */
    public function store(Model $model, $response)
    {
        if (@$response['status'])
            return $model->images()->create($response);

        throw  new ResourceManipulationException(__('lang.resource_manipulation_error'), RESOURCE_MANIPULATION);
    }

    /**
     * @param $filename
     * @param $extension
     * @return string
     */
    public function createUniqueFilename($filename, $extension)
    {
        $path = storage_path($this->full_path . $filename . '.' . $extension);
        return (File::exists($path) ? $filename . '-' . substr(sha1(mt_rand()), 0, 5) : $filename) . '.' . $extension;
    }


    /**
     * @param $attachment
     * @param $filename
     * @return mixed
     */
    public function original(UploadedFile $attachment, $filename)
    {
        return $attachment->storeAs('', $filename);
    }

    /**
     * @param $attachment
     * @return array
     * @throws UploadErrorException
     */
    public function uploadBase64($attachment)
    {
        $base64_str = substr($attachment, strpos($attachment, ",") + 1);
        $filename = 'image_' . time() . mt_rand() . '.png';
        $response = Storage::disk()->put($this->uploads_path . $this->folder_name . '\\' . $filename, base64_decode($base64_str));
        if ($response) {
            return [
                'status' => true,
                'file_name' => $filename,
                'display_name' => $filename,
                'size' => 0,
                'extension' => 'png',
            ];
        }
        throw  new UploadErrorException(__('lang . uploading_error_exception'), UPLOADING_ERROR);
    }

    /**
     * @param $value
     * @param $column
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete($value, $column = 'id')
    {
        $image = Image::findBy($column, $value);
        if (isset($image)) {
            $path = storage_path($this->full_path . $image->file_name);
            if (File::exists($path)) {
                Storage::delete($this->full_path . $image->file_name);
            }
            $image->delete();
            return Response::json([
                'error' => false,
                'id' => $image->id,
                'filename' => $image->filename,
                'message' => __('lang . image_deleted'),
                'code' => 200
            ], 200);
        }
        return Response::json([
            'error' => true,
            'code' => 400
        ], 400);
    }

    /**
     * @param $filename
     * @return mixed
     * @throws AttachmentNotFoundException
     */
    public function get($filename)
    {
//        $image = Image::where('file_name', $filename)->orWhere('id', $filename)->first();
//        if (isset($image)) {
        $path = storage_path($this->full_path . $filename);
        if (!File::exists($path)) throw new AttachmentNotFoundException;
        return [
            'file' => File::get($path),
            'path' => $path,
            'mimeType' => File::mimeType($path)
        ];
//        }
//        throw  new ModelNotFoundException();
    }
}