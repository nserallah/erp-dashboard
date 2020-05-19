<?php
/**
 * Created by PhpStorm.
 * User: WeSSaM
 * Date: 15/01/2020
 * Time: 12:07 PM
 */

namespace Core\Settings\Repository;

use App\City;
use App\Country;
use App\Exceptions\ResourceManipulationException;
use App\Repositories\ModelRepository;
use App\Scopes\FilterScope;
use Core\Settings\Interfaces\TaxesInterface;
use Core\Settings\Models\Category;
use Core\Settings\Models\Resources\TaxesResource;
use Core\Settings\Models\Tax;
use Illuminate\Http\Request;

class TaxesRepository extends ModelRepository implements TaxesInterface
{
    public $modelRepository;

    public $model = Tax::class;
    public $relation = 'taxes';
    public $guard = ADMIN_GUARD;
    public $resource = TaxesResource::class;
    public $orderBy = 'created_at';
    public $sortBy = 'DESC';

    /**
     * CategoryRepository constructor.
     * @param ModelRepository $modelRepository
     * Author WeSSaM
     */
    public function __construct(ModelRepository $modelRepository)
    {
        $this->modelRepository = $modelRepository;
    }

    /**
     * @param Request $request
     * @return mixed
     * @throws \App\Exceptions\ResourceManipulationException
     */
    public function store(Request $request)
    {
        $item = new $this->model;
        $item->fill(array_merge($request->only($this->model::FILLABLE), [
            'value_type_id' => @$request->value_type['id'],
            'type_id' => @$request->type['id'],
            'user_id' => $this->auth()->id
        ]));
        if ($item->save()) {
            if (isset($request->applied_countries))
                foreach ($request->applied_countries as $country) {
                    $item->appliedCountries()->attach($country['id'], ['type' => 1, 'appliable_type' => Country::class]);
                }

            if (isset($request->except_countries))
                foreach ($request->except_countries as $country) {
                    $item->exceptCountries()->attach($country['id'], ['type' => 2, 'appliable_type' => Country::class]);
                }


            if (isset($request->applied_cities))
                foreach ($request->applied_cities as $city) {
                    $item->appliedCities()->attach($city['id'], ['type' => 1, 'appliable_type' => City::class]);
                }


            if (isset($request->except_cities))
                foreach ($request->except_cities as $city) {
                    $item->exceptCities()->attach($city['id'], ['type' => 2, 'appliable_type' => City::class]);
                }


            if (isset($request->applied_categories))
                foreach ($request->applied_categories as $category) {
                    $item->appliedCategories()->attach($category, ['type' => 1, 'appliable_type' => Category::class]);
                }


            if (isset($request->applied_categories))
                foreach ($request->applied_categories as $category) {
                    $item->exceptCategories()->attach($category, ['type' => 2, 'appliable_type' => Category::class]);
                }


            return $item;
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
        $model = $this->find($id);

        $status = $model->update(array_merge($request->only($this->model::FILLABLE), [
            'value_type_id' => @$request->value_type['id'],
            'type_id' => @$request->type['id'],
        ]));

        if ($status) {
            if (isset($request->applied_countries))
                foreach ($request->applied_countries as $country) {
                    if (!$model->have('appliedCountries', $country['id']))
                        $model->appliedCountries()->attach($country['id'], ['type' => 1, 'appliable_type' => Country::class]);
                }
            $model->detach('appliedCountries', custom_array_map($request->applied_countries));

            if (isset($request->except_countries))
                foreach ($request->except_countries as $country) {
                    if (!$model->have('exceptCountries', $country['id']))
                        $model->exceptCountries()->attach($country['id'], ['type' => 2, 'appliable_type' => Country::class]);
                }
            $model->detach('exceptCountries', custom_array_map($request->except_countries));


            if (isset($request->applied_cities))
                foreach ($request->applied_cities as $city) {
                    if (!$model->have('appliedCities', $city['id']))
                        $model->appliedCities()->attach($city['id'], ['type' => 1, 'appliable_type' => City::class]);
                }
            $model->detach('appliedCities', custom_array_map($request->applied_cities));


            if (isset($request->except_cities))
                foreach ($request->except_cities as $city) {
                    if (!$model->have('exceptCities', $city['id']))
                        $model->exceptCities()->attach($city['id'], ['type' => 2, 'appliable_type' => City::class]);
                }
            $model->detach('exceptCities', custom_array_map($request->except_cities));


            if (isset($request->applied_categories))
                foreach ($request->applied_categories as $category) {
                    if (!$model->have('appliedCategories', $category))
                        $model->appliedCategories()->attach($category, ['type' => 1, 'appliable_type' => Category::class]);
                }
            $model->detach('appliedCategories', custom_array_map($request->applied_categories));


            if (isset($request->except_categories))
                foreach ($request->except_categories as $category) {
                    if (!$model->have('exceptCategories', $category))
                        $model->exceptCategories()->attach($category, ['type' => 2, 'appliable_type' => Category::class]);
                }
            $model->detach('exceptCategories', custom_array_map($request->except_categories));

            return $model;
        }

        throw  new ResourceManipulationException(trans('lang.save_error'), RESOURCE_MANIPULATION);
    }

    /**
     * @return mixed
     * @throws \App\Exceptions\UnknownRelationException
     */
    public function all()
    {
        return $this->query()->get();
    }


    /**
     * @return mixed
     * @throws \App\Exceptions\UnknownRelationException
     */
    public function allWithResource()
    {
        return $this->resource::collection($this->all());
    }


    /**
     * @param array $attributes
     * @return mixed
     * @throws \App\Exceptions\UnknownRelationException
     */
    public function query($attributes = ['*'])
    {
        return parent::query($attributes);//->withoutGlobalScope(FilterScope::class); // TODO: Change the autogenerated stub
    }
}