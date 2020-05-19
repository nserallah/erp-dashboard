<?php

namespace Core\Settings\Collections;

use Illuminate\Http\Resources\Json\JsonResource;

class CurrencyResource extends JsonResource
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
            'id' => (int)$this->id,
            'name' => (string)$this->name,
            'locale_name' => (string)$this->locale_name,
            'icon' => (string)$this->icon,
            'is_active' => (int)$this->is_active,
        ];
    }
}
