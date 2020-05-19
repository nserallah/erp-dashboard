<?php

namespace Core\Settings\Controllers;

use App\Exceptions\UnknownRelationException;
use Core\Settings\Repository\TaxesRepository;
use Core\Settings\Requests\TaxesRequest;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class TaxesController extends BaseController
{

    private $taxesRepository;

    /**
     * CategoriesController constructor.
     * @param TaxesRepository $taxesRepository
     */
    public function __construct(TaxesRepository $taxesRepository)
    {
        $this->taxesRepository = $taxesRepository;
    }


    /**
     * @author WeSSaM
     * @param Request $request
     * @return mixed
     * @throws UnknownRelationException
     */
    public function index(Request $request)
    {
        $taxes = $this->taxesRepository->paginate($request);
        return response()->api(SUCCESS_RESPONSE, trans('lang.fetched_successfully', ['attribute' => trans('lang.taxes')]), $taxes);
    }


    /**
     * @param TaxesRequest $request
     * @return mixed
     * @throws \App\Exceptions\ResourceManipulationException
     */
    public function store(TaxesRequest $request)
    {
        $this->taxesRepository->store($request);
        return response()->api(SUCCESS_RESPONSE, trans('lang.stored_successfully', ['attribute' => trans('lang.tax')]));
    }

    /**
     * @author WeSSaM
     * @param $id
     * @param TaxesRequest $request
     * @return mixed
     * @throws UnknownRelationException
     * @throws \App\Exceptions\ResourceManipulationException
     */
    public function update($id, TaxesRequest $request)
    {
        $this->taxesRepository->update($id, $request);
        return response()->api(SUCCESS_RESPONSE, trans('lang.updated_successfully', ['attribute' => trans('lang.tax')]));
    }


    /**
     * @author WeSSaM
     * @param $id
     * @return mixed
     * @throws UnknownRelationException
     */
    public function find($id)
    {
        $tax = $this->taxesRepository->findWithResource($id);
        return response()->api(SUCCESS_RESPONSE, trans('lang.fetched_successfully', ['attribute' => trans('lang.tax')]), $tax);

    }


    /**
     * @author WeSSaM
     * @param $id
     * @param Request $request
     * @return mixed
     * @throws UnknownRelationException
     * @throws \App\Exceptions\UnAuthorizedActionException
     */
    public function activate($id, Request $request)
    {
        $this->taxesRepository->changeStatus($id, $request->is_active);
        return response()->api(SUCCESS_RESPONSE, trans('lang.updated_successfully', ['attribute' => trans('lang.tax')]));

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
        $this->taxesRepository->delete($id);
        return response()->api(SUCCESS_RESPONSE, trans('lang.deleted_successfully', ['attribute' => trans('lang.tax')]));
    }


}
