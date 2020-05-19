<?php

namespace App\Http\Controllers;

use App\Exceptions\UploadErrorException;
use App\Http\Requests\FileRequest;
use App\Repositories\FileRepository;
use Illuminate\Support\Facades\File;

class FileController extends Controller
{
    private $fileRepository;

    /**
     * @author ً ً WeSSaM
     * ImageController constructor.
     * @param $fileRepository $imageRepository
     */
    public function __construct(FileRepository $fileRepository)
    {
        $this->fileRepository = $fileRepository;
    }

    /**
     * @author ً ً WeSSaM
     * @param FileRequest $request
     * @return mixed
     */
    public function upload(FileRequest $request)
    {
        try {
            $file = $this->fileRepository->upload($request->file);
            return response()->api(SUCCESS_RESPONSE, trans('lang.file_uploaded_successfully'), $file);
        } catch (UploadErrorException $uploadErrorException) {
            return response()->api(ERROR_RESPONSE, $uploadErrorException->getMessage(), [], $uploadErrorException->getCode());
        }
    }


    /**
     * @author ً ً WeSSaM
     * @param $file
     * @return \Symfony\Component\HttpFoundation\BinaryFileResponse
     */
    public function find($file)
    {
        $path = storage_path() . '/app/' . $file;
        if (!File::exists($path)) abort(404);
        return response()->download($path);
    }


}
