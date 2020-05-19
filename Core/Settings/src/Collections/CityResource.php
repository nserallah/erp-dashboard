<?php

namespace Core\Settings\Collections;

use Illuminate\Http\Resources\Json\JsonResource;

class CityResource extends JsonResource
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
            'name' => $this->name,
            'name_translations' => $this->getTranslations('name'),
            'country' => @$this->country->name,
            'country_id' => @$this->country_id,
            'is_active' => (int)$this->is_active,
        ];
    }
}
