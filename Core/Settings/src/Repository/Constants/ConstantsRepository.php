<?php

namespace Core\Settings\Repository\Constants;

use App\Constant;
use App\Exceptions\ParentException;
use App\Repositories\BaseRepository;
use App\Repositories\GeneralRepository;
use Core\Settings\Interfaces\Constants\ConstantsInterface;
use Core\Settings\Models\Resources\ConstantsResource;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ConstantsRepository extends BaseRepository implements ConstantsInterface
{
    /**
     * constant model
     *
     * @author Amr
     * @var Constant
     */
    private $constant;

    private $where = null;

    public $model = Constant::class;

    /**
     * ConstantsRepository constructor.
     */
    public function __construct(Constant $constant)
    {
        $this->constant = $constant;
        $this->where = $this->constant->newQuery();
    }

    /**
     * set repository where
     *
     * @param Builder $where
     * @author Amr
     */
    public function setWhere(Builder $where)
    {
        $this->where = $this->getQuery();
    }

    /**
     * get repository's where
     *
     * @return Builder|null
     * @author Amr
     */
    public function getWhere()
    {
        return $this->where;
    }

    /**
     * get specific resources' columns
     *
     * @param array $cols
     * @return mixed
     * @author Amr
     */
    public function get($cols = ['*'])
    {
        return ConstantsResource::collection($this->constant->orderBy('created_at', 'desc')->get($cols));
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
        return $this->getQuery()->findOrFail($id);///new ConstantsResource();

    }

    /**
     * get all resources
     *
     * @return mixed
     * @author Amr
     */
    public function all()
    {
        $constantQuery = $this->getQuery()->orderBy('created_at', 'desc')->paginate(request()->has('per_page') ? request()->get('per_page') : 10);
        $constants = ConstantsResource::collection($constantQuery->getCollection());                                       // change the shape of response according to the resource class @author Amr
        $constantQuery->setCollection($constants->collection);
        return $constantQuery;
    }

    /**
     * delete resource according
     * to the given id
     *
     * @param $id
     * @return mixed
     *
     * @throws ParentException
     * @author Amr
     */
    public function delete($id)
    {
        $constants = $this->find($id);
        $children = $constants->children->count();
        if ($children > 0)
            throw new ParentException(trans('Settings::lang.constants.constants_has_children_error'), DELETE_CHILDREN_ERROR);
        $constants->delete();
        return $constants;
    }

    /**
     * this function is used to filter the returned
     * data according to th given resource
     *
     * @param array $where
     * @param int $per_page
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     * @author Amr
     */
    public function filter($where = [], $per_page = 10)
    {
        $constantsQuery = $this->constant->query();
        if (isset($where['is_parent'])) {
            $constantsQuery->where('parent_id', '!=', NULL);
            unset($where['is_parent']);
        }
        if (isset($where['per_page'])) {
            $per_page = $where['per_page'];
            unset($where['per_page']);
        }
        $constants = null;
        if (isset($where['not_paginate'])) {
            unset($where['not_paginate']);
            $collection = $constantsQuery->orderBy('created_at', 'desc')->where($where)->get();
            $collection = ConstantsResource::collection($collection);
        } else {
            $collection = $constantsQuery->where($where)->orderBy('created_at', 'desc')
                ->paginate($per_page);
            $constants = ConstantsResource::collection($collection->getCollection());                                       // change the shape of response according to the resource class @author Amr
            $collection->setCollection($constants->collection);
        }
        return $collection;
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
        $constant = $request->except('parent_id');
        $constant['parent_id'] = isset($request->input('parent_id')['id']) ? $request->input('parent_id')['id'] : @$request->input('parent')['id'];
        $savedConstant = $this->constant->create($constant);
        return $savedConstant;
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
//        dd($request->all());
        if (isset($request->parent['id']))
            $request->request->set('parent_id', $request->parent['id']);

        unset($request['parent']);
        unset($request['parent_id']);
        $constant = $this->find($id);
        $constant->fill($request->all());
//        dd(//);
        $constant->update();
        return $constant;
    }

    /**
     * update the status of resource from active
     * to inactive and vis versa
     *
     * @param Request $request
     * @param $id
     * @return mixed
     * @author Amr
     */
    function changeActiveStatus(Request $request, $id)
    {
        $constant = $this->find($id);
        $constant->fill($request->all());
        $constant->update();
        return $constant;
    }

    /**
     * @param array $where
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    function search($where = [])
    {
        $conjunction = 'where';
        if (isset($where['conjunction'])) {
            $conjunction = $where['conjunction'] == 'or' ? 'orWhere' : 'where';
            unset($where['conjunction']);
        }
        $constantQuery = $this->constant->query();


        foreach ($where as $key => $value) {
            if ($value == '') {
                continue;
            }

//            dd($conjunction);
            if ($valueList = Str::contains($value, ',')) {
                $valueList = explode(',', $value);
                foreach ($valueList as $item) {
//                    dd($item);
                    $constantQuery = $constantQuery->$conjunction($key, 'like', $this->getSearchableValueFormat($key, $item));
                }
                continue;
            }

            $constantQuery = $constantQuery->$conjunction($key, 'like', $this->getSearchableValueFormat($key, $value));
        }
//        dd($constantQuery->toSql());
        $collection = $constantQuery->orderBy('created_at', 'desc')
            ->paginate(10);
        $constants = ConstantsResource::collection($collection->getCollection());                                       // change the shape of response according to the resource class @author Amr
        $collection->setCollection($constants->collection);
        return $collection;
    }

    /**
     * @param $key
     * @param $value
     * @return string
     */
    private function getSearchableValueFormat($key, $value)
    {
        return "%$value%";
    }


    /**
     * @param $id
     * @param null $attribute
     * @return mixed
     */
    public function getAttributeFromValue($id, $attribute = null)
    {
        $constant = @$this->find($id);
        return isset($attribute) ? $constant->value->$attribute : $constant;
    }

    /**
     * get repo. constant
     *
     * @return Constant
     * @author Amr
     */
    public function getModel()
    {
        return $this->constant;
    }

}