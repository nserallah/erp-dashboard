<?php


namespace Core\Settings\Controllers;


use App\City;
use App\Country;
use App\Exceptions\ModelDeleteException;
use App\Exceptions\ResourceManipulationException;
use Core\Settings\Collections\CityResource;
use Core\Settings\Requests\CityRequest;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class CitiesController extends BaseController
{


    /**
     * @author WeSSaM
     * @param CityRequest $request
     * @return mixed
     */
    public function store(CityRequest $request)
    {
        try {
            $city = City::create(array_merge(['user_id' => auth(SUPER_ADMIN_GUARD)->id()], $request->only(City::FILLABLE)));
            return response()->api(SUCCESS_RESPONSE, trans('Settings::lang.settings.city_stored_successfully'), []);
        } catch (ResourceManipulationException $resourceManipulationException) {
            return response()->api(ERROR_RESPONSE, $resourceManipulationException->getMessage(), [], $resourceManipulationException->getCode());
        }
    }


    /**
     * @param Request $request
     * @return mixed
     */
    public function fetch(Request $request)
    {
        $request->request->set('per_page', isset($request->per_page) ? $request->per_page : 10);
//        $cities = auth_user()->cities()->filter($request)->paginate($request->per_page);
        $cities = City::query()->filter($request)->paginate($request->per_page);
        return response()->api(SUCCESS_RESPONSE, '', resourcePaginator($cities, CityResource::class), SUCCESS_STATUS);
    }

    /**
     * @param $city
     * @return mixed
     */
    public function find($city)
    {
//        $city = auth_user()->cities()->find($city);
        $city = City::query()->find($city);
        return response()->api(SUCCESS_RESPONSE, '', new CityResource($city), SUCCESS_STATUS);
    }


    /**
     * @param $city
     * @param CityRequest $request
     * @return mixed
     */
    public function update($city, CityRequest $request)
    {
        try {
            $city = City::updateOrCreate(['id' => $city], $request->only(City::FILLABLE));
            return response()->api(SUCCESS_RESPONSE, trans('Settings::lang.city_updated_successfully'), []);
        } catch (ResourceManipulationException $resourceManipulationException) {
            return response()->api(ERROR_RESPONSE, $resourceManipulationException->getMessage(), [], $resourceManipulationException->getCode());
        }
    }

    /**
     * @param $id
     * @param Request $request
     * @return mixed
     */
    public function activate($id, Request $request)
    {
        try {
            $city = auth(SUPER_ADMIN_GUARD)->user()->cities()->find($id);
            $city->update(['is_active' => (int)$request->is_active]);
            return response()->api(SUCCESS_RESPONSE, trans('Settings::lang.city_status_successfully'), [], SUCCESS_STATUS);
        } catch (ModelNotFoundException $exception) {
            return response()->api(ERROR_RESPONSE, trans('Settings::lang.model_not_found'), [], RESOURCE_NOT_FOUND);
        }
    }

    /**
     * @param $city
     * @return mixed
     * @throws \Exception
     */
    public function delete($city)
    {
        try {
            $city = City::query()->find($city);
//            $city = auth(SUPER_ADMIN_GUARD)->user()->cities()->find($city);
            if ($city->canDelete()) {
                $city->delete();
                return response()->api(SUCCESS_RESPONSE, trans('Settings::lang.city_deleted_successfully'), [], SUCCESS_STATUS);
            }
            return response()->api(ERROR_RESPONSE, trans('Settings::lang.can_not_delete_city'), [], SUCCESS_STATUS);
        } catch (ModelDeleteException $modelDeleteException) {
            return response()->api(ERROR_RESPONSE, $modelDeleteException->getMessage(), [], $modelDeleteException->getCode());
        }
    }

    /**
     * get all cities
     *
     * @return mixed
     * @author Amr
     */
    public function index()
    {
        $cities = City::all();
        return response()->api(SUCCESS_RESPONSE, '', $cities);
    }


}