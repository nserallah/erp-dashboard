<?php

namespace Core\Settings\Models\Resources;

use App\Constant;
use Core\Settings\Collections\CityResource;
use Core\Settings\Collections\CountryResource;
use Illuminate\Http\Resources\Json\JsonResource;

class AddressResource extends JsonResource
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
            'owner_type' => [
                'id' => @$this->ownerType()->id,
            ],
            'type' =>  @$this->ownerType()->name,
            'postal_code' => $this->postal_code,
            'country' => new CountryResource(@$this->country),
            'country_name' => @$this->country->name,
            'city' => new CityResource(@$this->city),
            'city_name' => @$this->city->name,
            'address_1' => $request->has('default') ? @$this->getTranslations('address_1') : @$this->address_1,
            'address_2' => $request->has('default') ? @$this->getTranslations('address_2') : @$this->address_2,
            'owner' => [
                'id' => @$this->user->id,
                'name' => @$this->user->name
            ],
            'owner_name' => @$this->user->name,
            'created_at' => (string)$this->created_at
        ];
    }
}
