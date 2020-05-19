<?php

namespace Core\Settings\Controllers;

use App\Exceptions\UnknownRelationException;
use Core\Settings\Repository\UnitRepository;
use Core\Settings\Requests\UnitRequest;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class UnitController extends BaseController
{
    private $unitRepository;

    /**
     * CategoriesController constructor.
     * @param UnitRepository $unitRepository
     */
    public function __construct(UnitRepository $unitRepository)

    {
        $this->unitRepository = $unitRepository;
    }


    /**
     * @author WeSSaM
     * @param Request $request
     * @return mixed
     * @throws UnknownRelationException
     */
    public function index(Request $request)
    {
        $units = $this->unitRepository->paginate($request);
        return response()->api(SUCCESS_RESPONSE, trans('lang.fetched_successfully', ['attribute' => trans('lang.units')]), $units);
    }


    /**
     * @author WeSSaM
     * @param UnitRequest $request
     * @return mixed
     * @throws \App\Exceptions\ResourceManipulationException
     */
    public function store(UnitRequest $request)
    {
        $this->unitRepository->store($request);
        return response()->api(SUCCESS_RESPONSE, trans('lang.stored_successfully', ['attribute' => trans('lang.unit')]));
    }

    /**
     * @author WeSSaM
     * @param $id
     * @param UnitRequest $request
     * @return mixed
     * @throws UnknownRelationException
     * @throws \App\Exceptions\ResourceManipulationException Author WeSSaM
     */
    public function update($id, UnitRequest $request)
    {
        $this->unitRepository->update($id, $request);
        return response()->api(SUCCESS_RESPONSE, trans('lang.updated_successfully', ['attribute' => trans('lang.unit')]));
    }


    /**
     * @author WeSSaM
     * @param $id
     * @return mixed
     * @throws UnknownRelationException
     */
    public function find($id)
    {
        $unit = $this->unitRepository->findWithResource($id);
        return response()->api(SUCCESS_RESPONSE, trans('lang.fetched_successfully', ['attribute' => trans('lang.unit')]), $unit);
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
        $this->unitRepository->changeStatus($id, $request->is_active);
        return response()->api(SUCCESS_RESPONSE, trans('lang.updated_successfully', ['attribute' => trans('lang.unit')]));
    }


    /**
     * @param $id
     * @return mixed
     * @throws UnknownRelationException
     * @throws \App\Exceptions\ModelDeleteException
     */
    public function delete($id)
    {
        $this->unitRepository->delete($id);
        return response()->api(SUCCESS_RESPONSE, trans('lang.deleted_successfully', ['attribute' => trans('lang.unit')]));
    }

}
