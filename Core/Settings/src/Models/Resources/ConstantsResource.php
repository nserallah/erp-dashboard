<?php

namespace Core\Settings\Models\Resources;

use Core\Settings\Collections\ConstantResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ConstantsResource extends JsonResource
{


    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
//        dd($request->all());
        return [
            'id' => $this->id,
            'locale_name' => $this->locale_name,
            'locale_value' => $this->locale_value,
            'name' => $request->has('default') ? $this->getTranslations('name') : $this->name,
            'value' => $this->value,
            'key' => $this->key,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'is_active' => $this->is_active,
            'parent_id' => $this->parent_id,
            $this->mergeWhen(isset($this->parent),
                ['parent' => new ConstantResource($this->parent)]
            ),
            $this->mergeWhen(!isset($this->parent),
                ['children' => ConstantsResource::collection($this->children),]
            ),
        ];
    }
}
