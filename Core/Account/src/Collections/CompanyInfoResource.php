<?php

namespace Core\Account\Collections;

use Illuminate\Http\Resources\Json\JsonResource;

class CompanyInfoResource extends JsonResource
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
            'name' => (string) $this->name,
            'activity_type' =>  (string) @$this->activityType->name,
            'plan_level' =>  (string) @$this->plan->planLevel->name,
            'is_active' => $this->is_active,
        ];
    }
}
