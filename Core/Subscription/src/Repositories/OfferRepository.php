<?php

namespace Core\Subscription\Repositories;

/**
 * Created by PhpStorm.
 * User: WeSSaM
 * Date: 02/12/2019
 * Time: 3:57 PM
 */

use App\Exceptions\ResourceManipulationException;
use App\Plan;
use App\PlanOffer;
use App\Repositories\ModelRepository;
use Core\Subscription\Collections\PlanOfferResource;
use Illuminate\Http\Request;

class OfferRepository extends ModelRepository
{


    /**
     * PlanRepository constructor.
     */
    public function __construct()
    {
        $this->setModel(PlanOffer::class);
        $this->setRelation('offers');
        $this->setResource(PlanOfferResource::class);
    }


    /**
     * @param Request $request
     * @return Plan|mixed
     * @throws ResourceManipulationException
     */
    public function store(Request $request)
    {
        $this->model->fill($request->only($this->model->getFillable()));
        $this->model->starts_at = get_date_from_timestamp($request->get('starts_at'));
        $this->model->ends_at = get_date_from_timestamp($request->get('ends_at'));
        $this->model->user_id = $this->auth()->id;
        if ($this->model->save()) {
            return $this->model;
        }
        throw  new ResourceManipulationException(trans('lang.save_error'), RESOURCE_MANIPULATION);
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
        $item = $this->find($id);
        $item->fill($request->only($this->model->getFillable()));
        $item->fill([
            'starts_at' => get_date_from_timestamp($request->starts_at),
            'ends_at' => get_date_from_timestamp($request->ends_at),
        ]);
        if ($item->save()) {
            $item->createLog();
            return $item;
        }
        throw  new ResourceManipulationException(trans('lang.save_error'), RESOURCE_MANIPULATION);
    }


}