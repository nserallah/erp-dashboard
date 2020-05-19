<?php

namespace App\Http\Controllers;

use App\Exceptions\AttachmentNotFoundException;
use App\Repositories\ImageRepository;
use Illuminate\Support\Facades\Response;
use Intervention\Image\ImageManager;

class ImageController extends Controller
{
    private $imageRepository;

    /**
     * ImageController constructor.
     * @param ImageRepository $imageRepository
     */
    public function __construct(ImageRepository $imageRepository)
    {
        $this->imageRepository = $imageRepository;
    }

    /**
     * @param $filename
     * @param string $str
     * @return \Illuminate\Http\Response|string
     */
    public function getDefaultImage($filename, $str = 'max-age=604800, public')
    {
        try {
            $result = $this->imageRepository->get($filename);
            $manager = new ImageManager();
            $image = $manager->make($result['file']);
            $response = Response::make($image->encode($image->mime), 200);
            $response->header("CF-Cache-Status", 'HIF');
            $response->header("Cache-Control", $str);
            $response->header("Content-Type", @$result['mimeType']);
            $response->header("Vary", 'Accept-Encoding');
            return $response;
        } catch (AttachmentNotFoundException $attachmentNotFoundException) {
            return $attachmentNotFoundException->getMessage();
        }
    }


    /**
     * @param $size
     * @param $id
     * @return \Illuminate\Http\Response|string
     */
    public function getImageResize($size, $id)
    {

        try {
            $result = $this->imageRepository->get($id);
            $manager = new ImageManager();
            $sizes = explode("x", $size);
            $image = (is_numeric($sizes[0]) && is_numeric($sizes[1])) ? $manager->make($result['file'])->fit($sizes[0], $sizes[1], function ($constraint) {
                $constraint->upsize();
            }) : $manager->make($result['file']);
            $response = Response::make($image->encode($image->mime), 200);
            $response->header("CF-Cache-Status", 'HIF');
            $response->header("Cache-Control", 'max-age=604800, public');
            $response->header("Content-Type", @$result['mimeType']);
            $response->header("Vary", 'Accept-Encoding');
            return $response;
        } catch (AttachmentNotFoundException $attachmentNotFoundException) {
            return $attachmentNotFoundException->getMessage();
        }
    }

    public function getStorageImage($all)
    {
        $file = \Illuminate\Support\Facades\Storage::get($all);
        return response($file, 200)->header('Content-Type', 'image/jpeg');
    }

}
