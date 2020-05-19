<?php

namespace Core\Settings\Models\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UnitResource extends JsonResource
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
            'name' => $request->has('default') ? @$this->getTranslations('name') : @$this->name,
            $this->mergeWhen(isset($this->parent), [
                'parent' => new BrandResource($this->parent),
                'parent_name' => @$this->parent->name
            ]),
            'abbreviation' => (string)$this->abbreviation,
            'sub_value_total' => (int)$this->sub_value_total,
            'applied_categories' => $this->appliedCategories()->get()->pluck('id'),
            'route' => 'unit.activate',
            'params' => ['unit_id' => $this->id],
            'notes' => (string)$this->notes,
            'is_active' => (int)$this->is_active,
            'created_at' => (string)$this->created_at
        ];
    }
}
