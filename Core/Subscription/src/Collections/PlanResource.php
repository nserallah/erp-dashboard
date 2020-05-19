<?php

namespace Core\Subscription\Collections;

use Core\Settings\Collections\ConstantResource;
use Illuminate\Http\Resources\Json\JsonResource;

class PlanResource extends JsonResource
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
            'title' => (string)$this->title,
            'title_translations' => $this->getTranslations('title'),
            'price_month' => (double)$this->price_month,
            'price_year' => (double)$this->price_year,
            'currency' => (string)$this->currency->name,
            'currency_symbol' => (string)$this->currency->icon,
            'currency_id' => (int)$this->currency_id,
            'level' => (string)$this->level->name,
            'level_id' => (int)$this->level_id,
            'branch_no' => (int)$this->branch_no,
            'inventory_no' => (int)$this->inventory_no,
            'pos_no' => (int)$this->pos_no,
            'emp_no' => (int)$this->emp_no,
            'item_no' => (int)$this->item_no,
            'max_trail_no' => (int)$this->max_trail_no,
            'is_trial' => (int)$this->is_trial,
            'interval_trail' => (int)$this->interval_trail,
            'is_active' => (boolean)$this->is_active,
            'modules' => ConstantResource::collection($this->modules),
            'intervals' => $this->planIntervals()->with('interval')->get()
        ];
    }
}
