<?php

namespace Core\Subscription\Controllers;

use Core\Subscription\Repositories\OfferRepository;
use Core\Subscription\Repositories\PlanRepository;
use Core\Subscription\Requests\StorePlanOfferRequest;
use Core\Subscription\Requests\UpdatePlanOfferRequest;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;


class OfferController extends BaseController
{


    private $planRepository;
    private $offerRepository;

    public function __construct()
    {
        $this->planRepository = new PlanRepository;
        $this->offerRepository = new OfferRepository;
    }


    /**
     * @param StorePlanOfferRequest $request
     * @return mixed
     * @throws \App\Exceptions\ResourceManipulationException
     */
    public function store(StorePlanOfferRequest $request)
    {
        $this->offerRepository->store($request);
        return response()->api(SUCCESS_RESPONSE, trans('Subscription::lang.plan_offer_stored_successfully'), [], SUCCESS_STATUS);
    }

    /**
     * @param $offer
     * @param UpdatePlanOfferRequest $request
     * @return mixed
     * @throws \App\Exceptions\ResourceManipulationException
     * @throws \App\Exceptions\UnknownRelationException
     */
    public function update($offer, UpdatePlanOfferRequest $request)
    {
        $this->offerRepository->update($offer, $request);
        return response()->api(SUCCESS_RESPONSE, trans('Subscription::lang.plan_offer_stored_successfully'), [], SUCCESS_STATUS);
    }


    /**
     * @param $plan
     * @param $offer
     * @param Request $request
     * @return mixed
     * @throws \App\Exceptions\UnAuthorizedActionException
     * @throws \App\Exceptions\UnknownRelationException
     */
    public function activate($plan, $offer, Request $request)
    {
        $this->offerRepository->changeStatus($offer, $request->is_active);
        return response()->api(SUCCESS_RESPONSE, trans('Subscription::lang.plan_offer_status_updated_successfully'), [], SUCCESS_STATUS);
    }


    /**
     * @param Request $request
     * @return mixed
     * @throws \App\Exceptions\UnknownRelationException
     */
    public function fetchOffers(Request $request)
    {
        $offers = $this->offerRepository->paginate($request);
        return response()->api(SUCCESS_RESPONSE, trans('Subscription::lang.plan_offers_fetched_successfully'), $offers, SUCCESS_STATUS);
    }


    /**
     * @param $id
     * @return mixed
     * @throws \App\Exceptions\UnknownRelationException
     */
    public function find($id)
    {
        $offer = $this->offerRepository->findWithResource($id);
        return response()->api(SUCCESS_RESPONSE, trans('Subscription::lang.offer_fetched_successfully'), $offer, SUCCESS_STATUS);
    }


    /**
     * @param Request $request
     * @return mixed
     * @throws \App\Exceptions\UnknownRelationException
     */
    public function fetch(Request $request)
    {
        $this->planRepository->setOrderBy('level_id', 'DESC');
        return response()->api(SUCCESS_RESPONSE, '', $this->planRepository->get(), SUCCESS_STATUS);
    }

}
