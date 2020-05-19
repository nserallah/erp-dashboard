<?php


namespace Core\Settings\Repository;


use App\Constant;
use App\Repositories\BaseRepository;
use Core\Company\Interfaces\BaseInterface;
use Core\Company\Models\GeneralAddress;
use Core\Company\Models\Resources\GeneralAddressResource;

class GeneralAddressRepository extends BaseRepository implements BaseInterface
{
    public $model = GeneralAddress::class;
    public $with = ['country', 'city'];
    public $resource = GeneralAddressResource::class;

    /**
     * get single resource according to
     * the given id
     *
     * @param $id
     * @return mixed
     * @author Amr
     */
    public function find($id)
    {
        $generalAddress = $this->getQuery()->with($this->with)->findOrFail($id);
        $generalAddress->address_type = @Constant::where(['key' => 'ADDRESS_TYPE'])->where('value->hash', '2')->first()->id;
        return $generalAddress;
    }
}