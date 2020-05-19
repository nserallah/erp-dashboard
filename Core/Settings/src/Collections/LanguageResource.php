<?php

namespace Core\Settings\Collections;

use Illuminate\Http\Resources\Json\JsonResource;

class LanguageResource extends JsonResource
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
            'locale' => (string)$this->locale,
            'is_rtl' => (boolean)$this->is_rtl,
            'icon' => (string)$this->icon,
            'is_default' => (boolean)$this->is_default,
        ];
    }
}
