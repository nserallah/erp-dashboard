<?php

namespace App;

class File extends Attachment
{
    protected $fillable = ['display_name', 'file_name', 'extension', 'size'];

    public static $rules = 'required|mimes:png,gif,jpeg,jpg,bmp,svg,pdf,doc,docx,rar,zip,xls';

}
