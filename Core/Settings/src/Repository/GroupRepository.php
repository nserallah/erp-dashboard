<?php
/**
 * Created by PhpStorm.
 * User: WeSSaM
 * Date: 15/01/2020
 * Time: 12:07 PM
 */

namespace Core\Settings\Repository;

use App\Exceptions\ResourceManipulationException;
use App\Repositories\ModelRepository;
use App\Scopes\FilterScope;
use Core\Settings\Interfaces\TaxesInterface;
use Core\Settings\Models\Group;
use Core\Settings\Models\Resources\GroupResource;
use Illuminate\Http\Request;

class GroupRepository extends ModelRepository implements TaxesInterface
{
    public $modelRepository;

    public $model = Group::class;
    public $relation = 'groups';
    public $guard = ADMIN_GUARD;
    public $resource = GroupResource::class;
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
            'type_id' => @$request->type['id'],
            'user_id' => $this->auth()->id
        ]));
        if ($item->save())
            return $item;


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
            'type_id' => @$request->type['id'],
            'user_id' => $this->auth()->id
        ]));

        if ($status)
            return $model;


        throw  new ResourceManipulationException(trans('lang.save_error'), RESOURCE_MANIPULATION);
    }

    /**
     * @return mixed
     * @throws \App\Exceptions\UnknownRelationException
     */
    public function all()
    {
        dd('ss');
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
     */
    public function query($attributes = ['*'])
    {
        return $this->querySearch(\request()->all(), $attributes);//$this->model::query()->select($attributes);
    }

    /**
     * get query with different shapes according to the
     * search attributes
     *
     * @param $searchAttributes
     * @param $queryAttributes
     * @return mixed
     * @author Amr
     */
    public function querySearch($searchAttributes, $queryAttributes)
    {
        $searchAttributes = collect($searchAttributes);
        if ($searchAttributes->has('type')) {
            return $this->getQuery()->whereHas('type', function ($query) {
                $query->where('name', 'like', '%' . \request()->input('type') . '%');
            })->select($queryAttributes);
        }
        return $this->getQuery()->select($queryAttributes);
    }


}