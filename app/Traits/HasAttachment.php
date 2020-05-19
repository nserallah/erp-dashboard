<?php
/**
 * Created by PhpStorm.
 * User: WeSSaM
 * Date: 02/02/2020
 * Time: 8:57 PM
 */

namespace App\Traits;


trait HasAttachment
{


    /**
     * @author WeSSaM
     * @param $key
     * @param $value
     * @return mixed
     */
    public function setAttribute($key, $value)
    {

        if (array_key_exists($key, $this->attachments)) {
            $value = url('file/' . $value);

        }
        return parent::setAttribute($key, $value);
    }
}