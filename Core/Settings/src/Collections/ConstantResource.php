<?php

namespace Core\Settings\Collections;

use Illuminate\Http\Resources\Json\JsonResource;

class ConstantResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'key' => $this->key,
            $this->mergeWhen((isset($this->children) && $this->children()->count() > 0),
                ['children' => ConstantResource::collection($this->children)])
        ];
    }
}
