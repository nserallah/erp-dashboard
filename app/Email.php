<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Email extends BaseModel
{
    use SoftDeletes;
    /**
     * model's email
     * @author Amr
     * @var string
     */
    protected $table = 'emails';
    /**
     * table's column
     *
     * @author Amr
     * @var array
     */
    protected $fillable = ['email_type', 'email_id', 'content'];

    /**
     * morph relation with the related classes
     *
     * @return \Illuminate\Database\Eloquent\Relations\MorphTo
     * @author Amr
     */
    public function emailable()
    {
        return $this->morphTo();
    }
}
