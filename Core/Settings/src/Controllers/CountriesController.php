<?php


namespace Core\Settings\Controllers;


use App\Country;
use App\Exceptions\ModelDeleteException;
use App\Exceptions\ResourceManipulationException;
use App\Interfaces\AttachmentInterface;
use Core\Settings\Collections\CountryResource;
use Core\Settings\Requests\CountryRequest;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class CountriesController extends BaseController
{

    private $imageRepository;

    /**
     * CountriesController constructor.
     * @param AttachmentInterface $imageRepository
     */
    public function __construct(AttachmentInterface $imageRepository)
    {
        $this->imageRepository = $imageRepository;
    }


    /**
     * @param CountryRequest $request
     * @return mixed
     */
    public function store(CountryRequest $request)
    {
        try {
            $country = Country::create(array_merge(['user_id' => auth(SUPER_ADMIN_GUARD)->id()], $request->only(Country::FILLABLE)));
            $this->imageRepository->store($country, @$this->imageRepository->uploadBase64($request->flag));
            return response()->api(SUCCESS_RESPONSE, trans('Settings::lang.settings.country_stored_successfully'), []);
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
//        $countries = auth_user()->countries()->filter($request)->paginate($request->per_page);
        $countries = Country::query()->filter($request)->paginate($request->per_page);
        return response()->api(SUCCESS_RESPONSE, '', resourcePaginator($countries, CountryResource::class), SUCCESS_STATUS);
    }

    /**
     * @param $country
     * @return mixed
     */
    public function find($country)
    {
//        $plan = auth(SUPER_ADMIN_GUARD)->user()->countries()->find($country);
        $country = Country::query()->find($country);
        return response()->api(SUCCESS_RESPONSE, '', new CountryResource($country), SUCCESS_STATUS);
    }


    /**
     * @param $country
     * @param Request $request
     * @return mixed
     */
    public function update($country, Request $request)
    {
        try {
            $country = Country::updateOrCreate(['id' => $country], $request->only(Country::FILLABLE));
            if (isset($request->flag)) {
                $this->imageRepository->store($country, @$this->imageRepository->uploadBase64($request->flag));
            }
            return response()->api(SUCCESS_RESPONSE, trans('Settings::lang.country_updated_successfully'), []);
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
            $country = auth(SUPER_ADMIN_GUARD)->user()->countries()->find($id);
            $country->update(['is_active' => (int)$request->is_active]);
            return response()->api(SUCCESS_RESPONSE, trans('Settings::lang.country_status_successfully'), [], SUCCESS_STATUS);
        } catch (ModelNotFoundException $exception) {
            return response()->api(ERROR_RESPONSE, trans('Settings::lang.model_not_found'), [], RESOURCE_NOT_FOUND);
        }
    }

    /**
     * @param $country
     * @return mixed
     * @throws \Exception
     */
    public function delete($country)
    {
        try {
            //            $country = auth(SUPER_ADMIN_GUARD)->user()->countries()->find($country);
            $country = Country::query()->find($country);
            if ($country->canDelete()) {
                $country->delete();
                return response()->api(SUCCESS_RESPONSE, trans('Settings::lang.country_deleted_successfully'), [], SUCCESS_STATUS);
            }
            return response()->api(ERROR_RESPONSE, trans('Settings::lang.can_not_delete_country'), [], SUCCESS_STATUS);
        } catch (ModelDeleteException $modelDeleteException) {
            return response()->api(ERROR_RESPONSE, $modelDeleteException->getMessage(), [], $modelDeleteException->getCode());
        }
    }

    /**
     * get all countries
     *
     * @param Request $request
     * @return mixed
     * @author Amr
     */
    public function index(Request $request)
    {
        $countries = Country::all();
        return response()->api(SUCCESS_RESPONSE, '', $countries);
    }

    /**
     * get country's cities
     *
     * @param $countryId
     * @return mixed
     * @author Amr
     */
    public function cities($countryId)
    {
        $country = Country::with(['cities'])->find($countryId);
        return response()->api(SUCCESS_RESPONSE, '', $country->cities);
    }


}