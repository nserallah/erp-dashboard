<?php
/**
 * Created by PhpStorm.
 * User: WeSSaM
 * Date: 20/11/2019
 * Time: 1:34 PM
 */

namespace App\Interfaces;


use App\ImageModel;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;

Interface AttachmentInterface
{
    public function get($filename);

    public function upload(UploadedFile $attachment);

    public function createUniqueFilename($filename, $extension);

    public function store(Model $imageModel, $resposne);

    public function delete($value, $column = 'id');

    public function original(UploadedFile $attachment, $filename);

    public function uploadBase64($attachment);
}