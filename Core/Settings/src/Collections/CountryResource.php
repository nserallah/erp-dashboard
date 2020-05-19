<?php

namespace Core\Settings\Collections;

use Illuminate\Http\Resources\Json\JsonResource;

class CountryResource extends JsonResource
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
            'nationality' => $this->nationality,
            'nationality_translations' => $this->getTranslations('nationality'),
            'currency_id' => $this->currency_id,
            'currency' => $this->currency->name,
            'language_id' => $this->language_id,
            'language' => $this->language->name,
            'postal_code' => $this->postal_code,
            'mobile_prefix' => $this->mobile_prefix,
            'is_active' => (int)$this->is_active,
            'flag' => @$this->flag->file_name,
            'flag_url' => (string)imageUrl(@$this->flag->file_name),
        ];
    }
}
