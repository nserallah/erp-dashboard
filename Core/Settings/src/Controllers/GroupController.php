<?php

namespace Core\Settings\Controllers;

use App\Exceptions\UnknownRelationException;
use Core\Settings\Repository\GroupRepository;
use Core\Settings\Requests\GroupRequest;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class GroupController extends BaseController
{
    private $groupRepository;

    /**
     * @author WeSSaM
     * CategoriesController constructor.
     * @param GroupRepository $groupRepository
     */
    public function __construct(GroupRepository $groupRepository)
    {
        $this->groupRepository = $groupRepository;
    }


    /**
     * @param Request $request
     * @return mixed
     * @throws UnknownRelationException
     */
    public function index(Request $request)
    {
        $groups = $this->groupRepository->paginate($request);
        return response()->api(SUCCESS_RESPONSE, trans('lang.fetched_successfully', ['attribute' => trans('lang.groups')]), $groups);
    }


    /**
     * @param GroupRequest $request
     * @return mixed
     * @throws \App\Exceptions\ResourceManipulationException
     */
    public function store(GroupRequest $request)
    {
        $this->groupRepository->store($request);
        return response()->api(SUCCESS_RESPONSE, trans('lang.stored_successfully', ['attribute' => trans('lang.group')]));
    }

    /**
     * @param $id
     * @param GroupRequest $request
     * @return mixed
     * @throws UnknownRelationException
     * @throws \App\Exceptions\ResourceManipulationException
     * Author WeSSaM
     */
    public function update($id, GroupRequest $request)
    {
        $this->groupRepository->update($id, $request);
        return response()->api(SUCCESS_RESPONSE, trans('lang.updated_successfully', ['attribute' => trans('lang.group')]));
    }


    /**
     * @author WeSSaM
     * @param $id
     * @return mixed
     * @throws UnknownRelationException
     */
    public function find($id)
    {
        $group = $this->groupRepository->findWithResource($id);
        return response()->api(SUCCESS_RESPONSE, trans('lang.fetched_successfully', ['attribute' => trans('lang.group')]), $group);
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
        $this->groupRepository->changeStatus($id, $request->is_active);
        return response()->api(SUCCESS_RESPONSE, trans('lang.updated_successfully', ['attribute' => trans('lang.group')]));
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
        $this->groupRepository->delete($id);
        return response()->api(SUCCESS_RESPONSE, trans('lang.deleted_successfully', ['attribute' => trans('lang.group')]));
    }

}
