<?php

namespace Core\Settings\Models\Resources;

use Core\Settings\Collections\CityResource;
use Core\Settings\Collections\ConstantResource;
use Core\Settings\Collections\CountryResource;
use Illuminate\Http\Resources\Json\JsonResource;

class TaxesResource extends JsonResource
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
            'id' => (int)$this->id,
            'name' => $request->has('default') ? $this->getTranslations('name') : $this->name,
            'apply_start_date' => $this->apply_start_date,
            'type_id' => $this->type_id,
            'value_type_id' => $this->value_type_id,
            'value' => $this->value,
            $this->mergeWhen(isset($this->valueType), [
                'value_type' => new ConstantResource($this->valueType),
                'value_type_name' => $this->valueType->name
            ]),
            $this->mergeWhen(isset($this->type), [
                'type' => new ConstantResource($this->type),
                'type_name' => $this->type->name
            ]),
            'applied_countries' => CountryResource::collection($this->appliedCountries),
            'except_countries' => CountryResource::collection($this->exceptCountries),

            'applied_cities' => CityResource::collection($this->appliedCities),
            'except_cities' => CityResource::collection($this->appliedCities),

            'applied_categories' => $this->appliedCategories()->get()->pluck('id'),
            'except_categories' => $this->exceptCategories()->get()->pluck('id'),

            'route' => 'tax.activate',
            'params' => ['tax_id' => $this->id],
            'notes' => (string)$this->notes,
            'is_active' => (int)$this->is_active,
            'created_at' => (string)$this->created_at
        ];
    }
}
