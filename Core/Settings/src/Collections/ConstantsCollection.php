<?php


namespace Core\Settings\Collections;


use Core\Settings\Models\Resources\ConstantsResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ConstantsCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return parent::toArray($request);
    }
}