<?php

namespace Core\Settings\Controllers;

use App\Constant;
use App\Exceptions\UnknownRelationException;
use Core\Settings\Repository\AddressRepository;
use Core\Settings\Requests\AddressRequest;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;


class AddressController extends BaseController
{
    private $addressRepository;

    /**
     * CategoriesController constructor.
     * @param AddressRepository $addressRepository
     */
    public function __construct(AddressRepository $addressRepository)
    {
        $this->addressRepository = $addressRepository;
    }


    /**
     * @author WeSSaM
     * @param Request $request
     * @return mixed
     * @throws UnknownRelationException
     */
    public function index(Request $request)
    {
        $addresses = $this->addressRepository->paginate($request);
        return response()->api(SUCCESS_RESPONSE, trans('lang.fetched_successfully', ['attribute' => trans('lang.addresses')]), $addresses);
    }


    /**
     * @param $id
     * @return mixed
     */
    public function getUsersByType($id)
    {
        $constant = Constant::find($id);
        if (isset($constant->value->model)) {

            $groups = $this->addressRepository->auth()->groups()->get()->pluck('id');
            //  $groups = $this->addressRepository->auth()->groups()->where('type_id', $id)->get()->pluck('id');
            $model = $constant->value->model;
            if (!class_exists($model))
                return response()->api(ERROR_RESPONSE, __('lang.unknown_class'), [], RESOURCE_NOT_FOUND);

            $users = $model::query()
                ->where('user_id', auth_user()->id)
                ->whereIn('group_id', $groups)->get();
            return response()->api(SUCCESS_RESPONSE, trans('Settings::lang.addresses_fetched_successfully'), ($model::$resource)::collection($users), SUCCESS_STATUS);
        }
        return response()->api(ERROR_RESPONSE, __('lang.unknown_class'), [], RESOURCE_NOT_FOUND);
    }


    /**
     * @param AddressRequest $request
     * @return mixed
     * @throws \App\Exceptions\ResourceManipulationException
     */
    public function store(AddressRequest $request)
    {
        $this->addressRepository->store($request);
        return response()->api(SUCCESS_RESPONSE, trans('lang.saved_successfully', ['attribute' => trans('lang.address')]));
    }

    /**
     * @param $id
     * @param AddressRequest $request
     * @return mixed
     * @throws UnknownRelationException
     * @throws \App\Exceptions\ResourceManipulationException
     * Author WeSSaM
     */
    public function update($id, AddressRequest $request)
    {
        $this->addressRepository->update($id, $request);
        return response()->api(SUCCESS_RESPONSE, trans('lang.updated_successfully', ['attribute' => trans('lang.address')]));
    }


    /**
     * @param $id
     * @return mixed
     */
    public function find($id)
    {
        try {
            $tax = $this->addressRepository->findWithResource($id);
            return response()->api(SUCCESS_RESPONSE, trans('Company::lang.address_fetched_successfully'), $tax, SUCCESS_STATUS);
        } catch (UnknownRelationException $e) {
            return response()->api(ERROR_RESPONSE, $e->getMessage(), [], $e->getCode());
        }
    }


    /**
     * @param $id
     * @param Request $request
     * @return mixed
     * @throws UnknownRelationException
     * @throws \App\Exceptions\UnAuthorizedActionException
     */
    public function activate($id, Request $request)
    {
        $this->addressRepository->changeStatus($id, $request->is_active);
        return response()->api(SUCCESS_RESPONSE, trans('Company::lang.address_status_updated_successfully'), [], SUCCESS_STATUS);
    }


    /**
     * @param $id
     * @return mixed
     * @throws UnknownRelationException
     * @throws \App\Exceptions\ModelDeleteException
     */
    public function delete($id)
    {
        $this->addressRepository->delete($id);
        return response()->api(SUCCESS_RESPONSE, trans('lang.deleted_successfully', ['attribute' => trans('lang.address')]));
    }

}
