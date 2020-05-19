<?php


namespace App\Repositories;


use App\Http\Resources\BaseResource;
use Core\Company\Interfaces\BaseInterface;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;

class BaseRepository extends GeneralRepository implements BaseInterface
{
    /**
     * repo. model
     * @author Amr
     * @var
     */
    public $model;

    /**
     * repo. model
     * @author Amr
     * @var
     */
    public $resource = BaseResource::class;
    /**
     * relation returned with every fetch query
     * @author Amr
     * @var array
     */
    public $with = [];
    /**
     * relation returned just with  ( find ) query
     * @author Amr
     * @var array
     */
    public $findWith = [];
    /**
     * relation returned just with  ( all ) query
     * @author Amr
     * @var array
     */
    public $allWith = [];
    /**
     * table's columns used to order lists
     * @author Amr
     */
    const ORDERED_COLUMN = 'created_at';
    /**
     * order's direction
     * @author Amr
     */
    const ORDER = 'desc';

    /**
     * get specific resources' columns
     *
     * @param array $cols
     * @return mixed
     * @author Amr
     */
    public function get($cols = ['*'])
    {
        return $this->getQuery()->orderBy('created_at', 'desc')->get($cols);
    }

    /**
     * get single resource according to
     * the given id
     *
     * @param $id
     * @return mixed
     * @author Amr
     */
    public function find($id)
    {
        return $this->getQuery()->with($this->getFindWith())->findOrFail($id);
    }

    /**
     * get all resources
     *
     * @return mixed
     * @author Amr
     */
    public function all()
    {
        $query = $this->getQuery()->with($this->getAllWith())->orderBy(self::ORDERED_COLUMN, self::ORDER);
        $collection = collect();
        if (\request()->has('no_pagination'))
            return $this->getResource()::collection($query->get());
        $result = $query->paginate(DEFAULT_PAGINATION);
        $resourceResult = $this->getResource()::collection($result->getCollection());
        $result->setCollection(collect($resourceResult));
        return $result;
    }

    /**
     * delete resource according
     * to the given id
     *
     * @param $id
     * @return mixed
     *
     * @author Amr
     */
    public function delete($id)
    {
        $this->model::findOrFail($id)->delete();
        return $this->model;
    }

    /**
     * create new resource
     *
     * @param Request $request
     * @return mixed
     *
     * @author Amr
     */
    public function store(Request $request)
    {
        if (!is_object($this->model))
            return $this->model::create($this->getAttributes($request));
        return $this->model->create($this->getAttributes($request));
    }

    /**
     * update resource
     *
     * @param Request $request
     * @param $id
     * @return mixed
     *
     * @author Amr
     */
    public function update(Request $request, $id)
    {
        $model = $this->find($id);
        $model->fill($this->getAttributes($request));
        $model->update();
        return $model->refresh();
    }

    /**
     * get find with relations
     * @return array
     * @author Amr
     */
    private function getFindWith()
    {
        return array_merge($this->with, $this->findWith);
    }

    /**
     * get find with relations
     * @return array
     * @author Amr
     */
    private function getAllWith()
    {
        return array_merge($this->with, $this->allWith);
    }

    /**
     * you can shape the given attributes of request
     * as you want here by overriding this method
     *
     * @param Request $request
     * @return array
     * @author Amr
     */
    protected function getAttributes(Request $request)
    {
        return $request->all();
    }

    /**
     * get data after applying resource changes
     * @param $resource
     * @param $data
     * @return mixed
     * @author Amr
     */
    protected function getCollection($resource, $data)
    {
        if (!($data instanceof LengthAwarePaginator))
            return $resource::collection($data);
        $collection = $data->getCollection();
        $data->setCollection($resource::collection($collection)->collect());
        return $data;
    }

    /**
     * get model's resource
     * @return String
     * @author Amr
     */
    private function getResource()
    {
        return $this->resource;
    }
}