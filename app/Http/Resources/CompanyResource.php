<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CompanyResource extends JsonResource
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
            'user_id' => $this->user_id,
            'name' => $this->name,
            'start_date' => $this->start_date,
            'branch_no' => $this->branch_no,
            'size_id' => $this->size_id,
            'inventory_no' => $this->inventory_no,
            'employee_no' => $this->employee_no,
            'tax_no' => $this->tax_no,
            'contribution_type_id' => $this->contribution_type_id,
            'activity_type_id' => $this->activity_type_id,
            'product_type_id' => $this->product_type_id,
            'business_record_no' => $this->business_record_no,
            'country_id' => $this->country_id,
            'city_id' => $this->city_id,
            'email' => $this->email,
            'mobile' => $this->mobile,
            'fax' => $this->fax,
            'address' => $this->address,
            'latitude' => $this->latitude,
            'longitude' => $this->longitude,
            'logo' => $this->logo,
            'notes' => $this->notes,
            'custom_url' => $this->custom_url,
            'is_active' => $this->is_active,
            'remember_token' => $this->remember_token,
            'activity_id' => $this->activity_id,
            "business_name" => $this->business_name,
            'brief_name' => $this->brief_name,
            'plan_id' => $this->plan_id,
            'plan' => $this->plan,
            'account' => $this->account,
            'tempAccount' => $this->tempAccount,
            'activity' => $this->activity
        ];
    }
}
