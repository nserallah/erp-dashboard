<?php

namespace Core\Account\Models\Resources;

use App\Http\Resources\CompanyResource;
use Illuminate\Http\Resources\Json\JsonResource;

class TempAccountResource extends JsonResource
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
            'id' => $this->id,
            'company_name' => $this->company_name,
            'is_active' => $this->is_active,
            'company_id' => $this->company_id,
            'last_payment' => $this->last_payment,
            'company' => new  CompanyResource($this->company),
        ];
    }
}
