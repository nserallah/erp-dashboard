<?php

namespace Core\Settings\Controllers;

use App\Exceptions\UnknownRelationException;
use Core\Settings\Repository\BrandRepository;
use Core\Settings\Requests\BrandRequest;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class BrandController extends BaseController
{
    private $brandRepository;

    /**
     * CategoriesController constructor.
     * @param BrandRepository $brandRepository
     */
    public function __construct(BrandRepository $brandRepository)
    {
        $this->brandRepository = $brandRepository;
    }


    /**
     * @param Request $request
     * @return mixed
     * @throws UnknownRelationException
     */
    public function index(Request $request)
    {
        $brands = $this->brandRepository->paginate($request);
        return response()->api(SUCCESS_RESPONSE, trans('lang.fetched_successfully', ['attribute' => trans('lang.brands')]), $brands);
    }


    /**
     * @author WeSSaM
     * @param BrandRequest $request
     * @return mixed
     * @throws \App\Exceptions\ResourceManipulationException
     * @throws \App\Exceptions\UploadErrorException
     */
    public function store(BrandRequest $request)
    {
        $this->brandRepository->store($request);
        return response()->api(SUCCESS_RESPONSE, trans('lang.saved_successfully', ['attribute' => trans('lang.brand')]));
    }

    /**
     * @author WeSSaM
     * @param $id
     * @param BrandRequest $request
     * @return mixed
     * @throws UnknownRelationException
     * @throws \App\Exceptions\ResourceManipulationException
     * @throws \App\Exceptions\UploadErrorException
     */

    public function update($id, BrandRequest $request)
    {
        $this->brandRepository->update($id, $request);
        return response()->api(SUCCESS_RESPONSE, trans('lang.updated_successfully', ['attribute' => trans('lang.brand')]));
    }


    /**
     * @author WeSSaM
     * @param $id
     * @return mixed
     * @throws UnknownRelationException
     */
    public function find($id)
    {
        $brand = $this->brandRepository->findWithResource($id);
        return response()->api(SUCCESS_RESPONSE, trans('lang.fetched_successfully', ['attribute' => trans('lang.brand')]), $brand);
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
        $this->brandRepository->changeStatus($id, $request->is_active);
        return response()->api(SUCCESS_RESPONSE, trans('lang.updated_successfully', ['attribute' => trans('lang.brand')]));
    }


    /**
     * @author WeSSaM
     * @param $id
     * @return mixed
     * @throws UnknownRelationException
     * @throws \App\Exceptions\ModelDeleteException
     */
    public function delete($id)
    {
        $this->brandRepository->delete($id);
        return response()->api(SUCCESS_RESPONSE, trans('lang.deleted_successfully', ['attribute' => trans('lang.brand')]));
    }

}
