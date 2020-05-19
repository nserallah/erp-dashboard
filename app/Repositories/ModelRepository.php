<?php

namespace App\Repositories;

use App\Constant;
use App\Exceptions\ModelDeleteException;
use App\Exceptions\ResourceManipulationException;
use App\Exceptions\UnAuthorizedActionException;
use App\Exceptions\UnknownRelationException;
use App\Interfaces\ModelInterface;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\Resource;

class ModelRepository extends GeneralRepository implements ModelInterface
{


    public $model;
    public $relation;
    public $guard = SUPER_ADMIN_GUARD;
    public $resource = Resource::class;
    public $orderBy = 'id';
    public $sortBy = 'ASC';
    public $loadAll = false;


    /**
     * ModelRepository constructor.
     * @author WeSSaM
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @return \Illuminate\Contracts\Auth\Authenticatable|null
     */
    public function auth()
    {
        return auth($this->guard)->user();
    }


    /**
     * @param $id
     * @return mixed
     * @throws UnknownRelationException
     */
    public function find($id)
    {
        if ($this->query()->where('id', $id)->exists())
            return $this->query()->find($id);

        throw new ModelNotFoundException;
    }

    /**
     * @param $id
     * @return mixed
     * @throws UnknownRelationException
     */
    public function findWithResource($id)
    {
        return new $this->resource($this->query()->find($id));
    }


    /**
     * @param $relation
     * @return mixed
     * @throws UnknownRelationException
     */
    public function load($relation)
    {
        if (method_exists($this->auth(), $relation))
            return $this->auth()->$relation();

        throw new UnknownRelationException(trans('lang.unknown_relation'), UNKNOWN_RELATION);
    }

    /**
     * @param Request $request
     * @return mixed
     * @throws ResourceManipulationException
     */
    public function store(Request $request)
    {
        $item = new $this->model;
        $item->fill($request->only($item->getFillable()));
        $item->user_id = $this->auth()->id;
        if ($item->save())
            return $item;

        throw  new ResourceManipulationException(trans('lang.save_error'), RESOURCE_MANIPULATION);
    }


    /**
     * @param $id
     * @return mixed
     * @throws UnknownRelationException
     * @throws ModelDeleteException
     */
    public function delete($id)
    {
        $model = $this->find($id);
        if ($model->deleteAuthorized())
            return $model->delete();

        throw  new ModelDeleteException;
    }

    /**
     * @param $params
     * @param $value
     * @return mixed
     * @throws UnAuthorizedActionException
     * @throws UnknownRelationException
     */
    public function changeStatus($params, $value = 0)
    {
        if (!is_array($params))
            return $this->find($params)->update(['is_active' => $value]);
        elseif (is_array($params))
            return $this->query()->whereIn('id', $params)->update(['is_active' => $value]);


        throw new UnAuthorizedActionException(trans('lang.cannot_change_status'), NOT_AUTHORIZED_ACCESS);
    }

    /**
     * @param $params
     * @param $value
     * @return mixed
     * @throws UnAuthorizedActionException
     * @throws UnknownRelationException
     */
    public function changeDefault($params, $value = 0)
    {
        if (!is_array($params))
            return $this->find($params)->update(['is_default' => $value]);

        throw new UnAuthorizedActionException(trans('lang.cannot_change_status'), NOT_AUTHORIZED_ACCESS);
    }


    /**
     * @param $attributes
     * @return mixed
     * @throws UnknownRelationException
     */
    public function query($attributes = ['*'])
    {
        if ($this->guard == SUPER_ADMIN_GUARD && !$this->loadAll)
            return $this->load($this->relation)->getQuery()->select($attributes);

//        dd($this->getQuery());
        return $this->getQuery()->select($attributes);//$this->model::query()->select($attributes);
    }


    /**
     * @param array $attributes
     * @return mixed
     * @throws UnknownRelationException
     */
    public function get($attributes = ['*'])
    {
        return $this->resource::collection($this->query($attributes)->get());
    }


    /**
     * @param Request $request
     * @param array $attributes
     * @return mixed
     * @throws UnknownRelationException
     */
    public function paginate(Request $request, $attributes = ['*'])
    {
        $request->request->set('per_page', isset($request->per_page) ? $request->per_page : 10);
        $items = $this->query($attributes)->filter($request)->orderBy($this->orderBy, $this->sortBy)->paginate($request->per_page);
        $collection = $this->resource::collection($items->getCollection());
        $items->setCollection($collection->collection);
        return $items;
    }

    /**
     * @return mixed
     */
    public function getModel()
    {
        return $this->model;
    }

    /**
     * @param mixed $model
     */
    public function setModel($model): void
    {
        $this->model = new $model;
    }

    /**
     * @return string
     */
    public function getGuard(): string
    {
        return $this->guard;
    }

    /**
     * @param string $guard
     */
    public function setGuard(string $guard): void
    {
        $this->guard = $guard;
    }

    /**
     * @return mixed
     */
    public function getRelation()
    {
        return $this->relation;
    }

    /**
     * @param mixed $relation
     */
    public function setRelation($relation): void
    {
        $this->relation = $relation;
    }

    /**
     * @return mixed
     */
    public function getResource()
    {
        return $this->resource;
    }

    /**
     * @param mixed $resource
     */
    public function setResource($resource): void
    {
        $this->resource = $resource;
    }


    /**
     * @param string $orderBy
     * @param string $sortBy
     */
    public function setOrderBy(string $orderBy, string $sortBy): void
    {
        $this->orderBy = $orderBy;
        $this->sortBy = $sortBy;
    }

    /**
     * @param $id
     * @param Request $request
     * @return mixed
     * @throws UnknownRelationException
     * @throws ResourceManipulationException
     */
    public function update($id, Request $request)
    {
        $item = $this->find($id);
        $status = $item->update($request->only($item->getFillable()));
        if ($status)
            return $item;

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
     * @param Request $request
     * @param string $attribute
     * @return array|bool|null
     * @throws \App\Exceptions\UploadErrorException
     */
    public function uploadAttachment(Request $request, $attribute = 'attachment')
    {
        return !isset($request->$attribute) ?: (new FileRepository)->upload($request->$attribute);
    }

    /**
     * @param Request $request
     * @param string $object
     * @param string $attribute
     * @return mixed
     */
    public function getUserClassPath(Request $request, $object = 'owner_type', $attribute = 'id')
    {
        $type = Constant::find((@$request->$object)[$attribute]);
        if (isset($type->value->model))
            return $type->value->model;

        throw new ModelNotFoundException(trans('lang.cannot_get_user_type_classpath'), RESOURCE_MANIPULATION);
    }

    /**
     * @param bool $loadAll
     */
    public function setLoadAll(bool $loadAll): void
    {
        $this->loadAll = $loadAll;
    }

}