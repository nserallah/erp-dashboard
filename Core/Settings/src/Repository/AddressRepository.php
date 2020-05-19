<?php
/**
 * Created by PhpStorm.
 * User: WeSSaM
 * Date: 15/01/2020
 * Time: 12:07 PM
 */

namespace Core\Settings\Repository;

use App\Constant;
use App\Exceptions\ResourceManipulationException;
use App\Exceptions\UnknownRelationException;
use App\Repositories\ModelRepository;
use Core\Company\Models\Address;
use Core\Company\Models\GeneralAddress;
use Core\Settings\Interfaces\AddressInterface;
use Core\Settings\Models\Resources\AddressResource;
use CustomerRelationship\Models\Customer;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use SupplierRelationship\Models\Vendor;

class AddressRepository extends ModelRepository implements AddressInterface
{
    public $modelRepository;

    public $model = Address::class;
    public $relation = 'addresses';
    public $guard = ADMIN_GUARD;
    public $resource = AddressResource::class;
    public $orderBy = 'created_at';
    public $sortBy = 'DESC';
    private $query;
    private static $addressMap = [
        Address::class => 'createAddress',
        GeneralAddress::class => 'createGeneralAddress'
    ];

    private static $addressUpdateMap = [
        Address::class => 'updateAddress',
        GeneralAddress::class => 'UpdateGeneralAddress'
    ];

    /**
     * CategoryRepository constructor.
     * @param Address $address
     */
    public function __construct(Address $address)
    {
        $this->query = $address;
        parent::__construct();
    }

    /**
     * @param Request $request
     * @return mixed
     * @throws \App\Exceptions\ResourceManipulationException
     * @updated_by Amr
     */
    public function store(Request $request)
    {
        $this->mapSaveAddress($request);
    }


    /**
     * @param $id
     * @param Request $request
     * @return mixed
     * @throws ResourceManipulationException
     * @throws \App\Exceptions\UnknownRelationException
     */
    public function update($id, Request $request)
    {
        $this->mapUpdateAddress($id, $request);
    }

    /**
     * @return mixed
     * @throws \App\Exceptions\UnknownRelationException
     */
    public function all()
    {
        return $this->query()->get();
    }


    /**
     * @return mixed
     * @throws \App\Exceptions\UnknownRelationException
     */
    public function allWithResource()
    {
        return $this->resource::collection($this->all());
    }


    /**
     * @param array $attributes
     * @return mixed
     * @throws UnknownRelationException
     */
    public function query($attributes = ['*'])
    {
        $where = [];
        if (request()->has('type')) {
            $where = ['address_type' => $this->getType()[request()->input('type')]];
        }
        return parent::query($attributes);
//        return parent::query($attributes)->where($where)->select($attributes);
    }


    private function getType()
    {
        return [
            'customer' => Customer::class,
            'vendor' => Vendor::class
        ];
    }

    /**
     * @param Request $request
     * @param array $attributes
     * @return mixed
     * @throws UnknownRelationException
     */
    public function paginate(Request $request, $attributes = ['*'])
    {
        $request->request->set('per_page', isset($request->per_page) ? $request->per_page : 10);
        $items = $this->query($attributes)->filter($request)->orderBy($this->orderBy, $this->sortBy)->paginate($request->per_page);
        $collection = $this->resource::collection($items->getCollection());
        $items->setCollection($collection->collection);
        return $items;
    }

    /**
     * redirect to the suitable create function
     * according to the chosen type
     * @param $request
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     * @author Amr
     */
    private function mapSaveAddress($request)
    {
        $class = address_type_map()[$request->get('address_type')['value']['hash']];
        $methodName = static::$addressMap[$class];
        $this->{$methodName}($request);
    }

    /**
     * redirect to the suitable create function
     * according to the chosen type
     * @param $request
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     * @author Amr
     */
    private function mapUpdateAddress($id, $request)
    {
        $class = address_type_map()[$request->get('address_type')['value']['hash']];
        $methodName = static::$addressUpdateMap[$class];
        $this->{$methodName}($id, $request);
    }

    /**
     * create Address
     * @param $request
     * @return mixed
     * @throws ResourceManipulationException
     * @updated_by Amr
     */
    private function createAddress($request)
    {
        $item = new $this->model;

        $constant = Constant::find($request->owner_type['id']);
        if (isset($constant->value->model)) {
            $model = $constant->value->model;
            if (!class_exists($model))
                throw new ResourceManipulationException;

            $item->fill(array_merge($request->only($this->model::FILLABLE), [
                'address_type' => $model,
                'address_id' => @$request->owner['id'],
                'user_id' => $this->auth()->id,
                'address_1' => ($request->address_1),
                'address_2' => ($request->address_2),
                'postal_code' => $request->postal_code,
                'country_id' => @$request->country['id'],
                'city_id' => @$request->city['id'],
            ]));
            if ($item->save())
                return $item;

        }
        throw  new ResourceManipulationException(trans('lang.save_error'), RESOURCE_MANIPULATION);
    }

    /**
     * create GeneralAddress
     *
     * @param $request
     * @author Amr
     */
    private function createGeneralAddress($request)
    {
        $data = $request->all();
        $data['country_id'] = $request->get('country')['id'];
        $data['city_id'] = $request->get('city')['id'];
        $data['user_id'] = auth_user()->id;
        GeneralAddress::create($data);
    }


    private function updateAddress($id, $request)
    {
        $item = $this->find($id);

        $constant = Constant::find($request->owner_type['id']);
        if (isset($constant->value->model)) {
            $model = $constant->value->model;
            if (!class_exists($model))
                throw new ResourceManipulationException;

            $item->fill(array_merge($request->only($this->model::FILLABLE), [
                'address_type' => $model,
                'address_id' => @$request->owner['id'],
                'user_id' => $this->auth()->id,
                'address_1' => ($request->address_1),
                'address_2' => ($request->address_2),
                'postal_code' => $request->postal_code,
                'country_id' => @$request->country['id'],
                'city_id' => @$request->city['id'],
            ]));
            if ($item->save())
                return $item;

        }
        throw  new ResourceManipulationException(trans('lang.save_error'), RESOURCE_MANIPULATION);
    }

    private function updateGeneralAddress($id, $request)
    {
        $generalAddress = GeneralAddress::findOrFail($id);
        $generalAddress->country_id = $request->get('country')['id'];
        $generalAddress->city_id = $request->get('city')['id'];
        $generalAddress->update();
        return $generalAddress;
    }


    /**
     * @param $id
     * @return mixed
     * @throws UnknownRelationException
     */
    public function findWithResource($id)
    {
        $address = (new $this->resource($this->query()->findOrFail($id)));
        $address = $address->toArray(request());
        $address['address_type'] = @Constant::where(['key' => 'ADDRESS_TYPE'])->where('value->hash', '1')->first();
        return $address;
    }

}