<?php

namespace Core\Settings\Models\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BrandResource extends JsonResource
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
            'icon_url' => url('image/' . $this->icon),
            'mother_company' => (string)$this->mother_company,
            'applied_categories' => $this->appliedCategories()->get()->pluck('id'),
            'route' => 'brand.activate',
            'params' => ['brand_id' => $this->id],
            'notes' => (string)$this->notes,
            'is_active' => (int)$this->is_active,
            'created_at' => (string)$this->created_at
        ];
    }
}
