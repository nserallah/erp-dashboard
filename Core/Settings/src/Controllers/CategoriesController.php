<?php

namespace Core\Settings\Controllers;

use App\Exceptions\UnknownRelationException;
use Core\Settings\Repository\CategoryRepository;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class CategoriesController extends BaseController
{

    private $categoryRepository;

    /**
     * CategoriesController constructor.
     * @param CategoryRepository $categoryRepository
     */
    public function __construct(CategoryRepository $categoryRepository)
    {
        $this->categoryRepository = $categoryRepository;
    }


    /**
     * @author WeSSaM
     * @param Request $request
     * @return mixed
     * @throws UnknownRelationException
     */
    public function index(Request $request)
    {
        $categories = $this->categoryRepository->allWithResource();
        return response()->api(SUCCESS_RESPONSE, trans('lang.fetched_successfully', ['attribute' => trans('lang.categories')]), $categories);
    }


    /**
     * @param Request $request
     * @return mixed
     * @throws \App\Exceptions\ResourceManipulationException
     */
    public function store(Request $request)
    {
        $this->categoryRepository->store($request);
        return response()->api(SUCCESS_RESPONSE, trans('lang.stored_successfully', ['attribute' => trans('lang.category')]));
    }

    /**
     * @author WeSSaM
     * @param $id
     * @param Request $request
     * @return mixed
     * @throws UnknownRelationException
     * @throws \App\Exceptions\ResourceManipulationException
     */
    public function update($id, Request $request)
    {
        $this->categoryRepository->update($id, $request);
        return response()->api(SUCCESS_RESPONSE, trans('lang.updated_successfully', ['attribute' => trans('lang.category')]));
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
        $this->categoryRepository->delete($id);
        return response()->api(SUCCESS_RESPONSE, trans('lang.deleted_successfully', ['attribute' => trans('lang.category')]));
    }
}
