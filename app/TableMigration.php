<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TableMigration extends BaseModel
{
    protected $fillable = ['migration','path','type'];


}
