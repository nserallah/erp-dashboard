<?php

namespace Core\Subscription\Collections;

use Illuminate\Http\Resources\Json\JsonResource;

class PlanOfferResource extends JsonResource
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
            'plan_id' => (int)$this->plan_id,
            'plan_title' => (string)$this->plan->title,
            'title' => (string)$this->title,
            'title_translations' => $this->getTranslations('title'),
            'starts_at' => (string)$this->starts_at,
            'ends_at' => (string)$this->ends_at,
            'discount_percentage_per_year' => (double)$this->discount_percentage_per_year,
            'discount_percentage_per_month' => (double)$this->discount_percentage_per_month,
            'is_active' => (boolean)$this->is_active,
        ];
    }


}
