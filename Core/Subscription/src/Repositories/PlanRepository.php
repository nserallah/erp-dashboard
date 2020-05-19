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
use App\Repositories\ModelRepository;
use Core\Subscription\Collections\PlanResource;
use Core\Subscription\Interfaces\PlanInterface;
use Illuminate\Http\Request;

class PlanRepository extends ModelRepository implements PlanInterface
{


    public $model = Plan::class;

    /**
     * PlanRepository constructor.
     */
    public function __construct()
    {
        $this->setModel(Plan::class);
        $this->setRelation('plans');
        $this->setResource(PlanResource::class);
    }


    /**
     * @param Request $request
     * @return Plan|mixed
     * @throws ResourceManipulationException
     */
    public function store(Request $request)
    {
        $this->model->fill($request->only($this->model->getFillable()));
        $this->model->user_id = $this->auth()->id;
        if ($this->model->save()) {
            $this->model->attachModules()->attachIntervals();
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
        $status = $item->update($request->only($this->model->getFillable()));
        if ($status) {
            $item->updateModules()->updateIntervals()->createPriceLog();
            return $item;
        }
        throw  new ResourceManipulationException(trans('lang.save_error'), RESOURCE_MANIPULATION);
    }


}