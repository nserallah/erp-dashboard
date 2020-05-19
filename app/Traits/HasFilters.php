<?php

namespace App\Traits;

trait HasFilters
{
    /**
     * get Query
     * if user passed filter
     * otherwise
     * return the model
     * @return mixed
     */
    public function getQuery()
    {
        if (request()->has('filter')) {
            $filters = app()->makeWith(\App\Filters\Filter::class, request()->all())->reformStructure();
            return $this->buildFilterQuery($filters);
        }

        return $this->__getModel();
    }

    /**
     * build query according
     * to the given data
     *
     * @param $filters
     * @return mixed
     * @author Amr
     */
    private function buildFilterQuery($filters)
    {
//        dd($filters, $filters['query'], $filters['values']);
        $query = $this->__getModel()->newQuery();
        if ($filters['query'] != null && trim($filters['query']) != '')
            $query->whereRaw($filters['query'], $filters['values']);
        if (isset($filters['relations']) && sizeof($filters['relations']) > 0) {
            foreach ($filters['relations'] as $key => $relation) {
                $query->whereHas($key, function ($query) use ($relation) {
                    $query->whereRaw($relation['query'], $relation['values']);
                });
            }
        }
        return $query;
    }


    /**
     * get the serialized filters
     * @return bool
     * @author Amr
     */
    protected function getFilters()
    {
        return request()->has('filter');
    }
}
