<?php


namespace Core\Settings\Controllers;


use Core\Settings\Interfaces\Constants\ConstantsInterface;
use Core\Settings\Models\Resources\ConstantsResource;
use Core\Settings\Requests\ConstantRequest;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class ConstantsController extends BaseController
{
    private $constantRepository;

    public function __construct(ConstantsInterface $constantRepository)
    {
        $this->constantRepository = $constantRepository;
    }

    /**
     * get all constants
     *
     * @param Request $request
     * @return mixed
     * @author Amr
     */
    public function index(Request $request)
    {

//        dd($request->all());
//        dd($request->input('filter'));
//        $query = Model::query();
//        foreach ($request->input('filter') as $key => $value) {
//            $query =  $query->where($value['']);
//        }
//        $filters = $this->getFilters($request);
        $constants = $this->constantRepository->all();
//        $constants->model = $this->constantRepository->getModel();
        return response()->api(SUCCESS_RESPONSE, trans('Settings::lang.constants.fetched_successfully'), $constants);
    }

    /**
     * show the constants according to the
     *  given id
     * @param $id
     * @return mixed
     * @author Amr
     */
    public function show($constant)
    {
        $constantResult = $this->constantRepository->find($constant);
        return response()->api(SUCCESS_STATUS, trans('Settings::lang.constants.single_fetched_successfully'), new ConstantsResource($constantResult));
    }

    /**
     * destroy constant according to
     * the given id
     *
     * @param $id
     * @return mixed
     * @author Amr
     */
    public function destroy($id)
    {
        $deletedObject = $this->constantRepository->delete($id);
        return response()->api(SUCCESS_STATUS, trans('Settings::lang.constants.deleted_successfully'), $deletedObject);
    }

    /**
     * create new constant
     *
     * @param ConstantRequest $request
     * @return mixed
     * @author Amr
     */
    public function store(ConstantRequest $request)
    {
        $createdConstant = $this->constantRepository->store($request);
        return response()->api(SUCCESS_STATUS, trans('Settings::lang.constants.created_successfully'), $createdConstant);
    }

    /**
     * update the existed constant
     *
     * @param ConstantRequest $request
     * @param $id
     * @return mixed
     * @author Amr
     */
    public function update(ConstantRequest $request, $id)
    {
        $updatedConstant = $this->constantRepository->update($request, $id);
        return response()->api(SUCCESS_STATUS, trans('Settings::lang.constants.updated_successfully'), $updatedConstant);

    }

    /**
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function changeActiveStatus(Request $request, $id)
    {
        $updatedConstant = $this->constantRepository->changeActiveStatus($request, $id);
        return response()->api(SUCCESS_STATUS, trans('Settings::lang.constants.status_updated_successfully'), $updatedConstant);
    }


    /**
     * return the attribute that will be used in
     * filtering operation
     *
     * @param Request $request
     *
     * @return mixed
     * @author Amr
     */
    private function getFilters(Request $request)
    {
        $filters = filter_request($request->all());
        return $filters;
    }

    /**
     * searching method
     *
     * @param Request $request
     * @return mixed
     * @author Amr
     */
    function search(Request $request)
    {
        $filters = $this->getFilters($request);
        $constants = $this->constantRepository->search($filters);
        return response()->api(SUCCESS_RESPONSE, trans('Settings::lang.constants.fetched_successfully'), $constants);
    }
}