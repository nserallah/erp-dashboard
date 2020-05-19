<?php

namespace Core\Subscription\Controllers;

use Core\Subscription\Interfaces\PlanInterface;
use Core\Subscription\Requests\PlanRequest;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class PlanController extends BaseController
{

    protected $repository;

    /**
     * PlanController constructor.
     * @param PlanInterface $planRepository
     */
    public function __construct(PlanInterface $planRepository)
    {
        $this->repository = $planRepository;
    }


    /**
     * @return mixed
     * @author WeSSaM
     */
    public function fetchActivePlans()
    {
        $this->repository->setLoadAll(true);
        $plans = $this->repository->get();
        return response()->api(SUCCESS_RESPONSE, trans('Subscription::lang.plan_fetched_successfully'), $plans);
    }

    /**
     * @param PlanRequest $request
     * @return mixed
     */
    public function store(PlanRequest $request)
    {
        $this->repository->store($request);
        return response()->api(SUCCESS_RESPONSE, trans('Subscription::lang.plan_stored_successfully'), [], SUCCESS_STATUS);
    }

    /**
     * @param Request $request
     * @return mixed
     */
    public function fetch(Request $request)
    {
        $this->repository->setOrderBy('level_id', 'DESC');
        return response()->api(SUCCESS_RESPONSE, trans('Subscription::lang.plan_fetched_successfully'), $this->repository->paginate($request), SUCCESS_STATUS);
    }


    /**
     * @param $id
     * @return mixed
     */
    public function fetchPlanById($id)
    {
        return response()->api(SUCCESS_RESPONSE, trans('Subscription::lang.plan_fetched_successfully'), $this->repository->findWithResource($id), SUCCESS_STATUS);
    }

    /**
     * @param $id
     * @param PlanRequest $request
     * @return mixed
     */
    public function update($id, PlanRequest $request)
    {
        $this->repository->update($id, $request);
        return response()->api(SUCCESS_RESPONSE, trans('Subscription::lang.plan_updated_successfully'), [], SUCCESS_STATUS);
    }

    /**
     * @param $id
     * @param Request $request
     * @return mixed
     */
    public function activate($id, Request $request)
    {
        $this->repository->changeStatus($id, $request->is_active);
        return response()->api(SUCCESS_RESPONSE, trans('Subscription::lang.plan_status_updated_successfully'), [], SUCCESS_STATUS);
    }


}
