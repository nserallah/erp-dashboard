<?php

namespace App\Http\Resources;

use Core\Settings\Models\Resources\ConstantsResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ConstantResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'user_id' => $this->user_id,
            'parent_id' => $this->parent_id,
            'key' => $this->key,
            'name' => $this->name,
            'value' => $this->value,
            'is_active' => $this->is_active,
            'children' => new ConstantsResource($this->children)
        ];
    }
}
