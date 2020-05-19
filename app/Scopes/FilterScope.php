<?php

namespace App\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;

class FilterScope implements Scope
{
    /**
     * Apply the scope to a given Eloquent query builder.
     *
     * @param \Illuminate\Database\Eloquent\Builder $builder
     * @param \Illuminate\Database\Eloquent\Model $model
     * @return void
     */
    public function apply(Builder $builder, Model $model)
    {
//
////        dd(\request()->input('filter'));
//        $filters = \request()->input('filter');
////        dd($filters);
//        //        $filters = $http_response_header-
//        if (request()->has('filter')) {
//            if ($filters['query'] != null && trim($filters['query']) != '')
//                $builder->whereRaw($filters['query'], $filters['values']);
//            if (isset($filters['relations'])) {
////                dd($filters['relations']);
////                dd($filters['relations']);
//                foreach ($filters['relations'] as $key => $relation) {
//                    $builder->whereHas($key, function ($query) use ($relation) {
//                        $query->whereRaw($relation['query'], $relation['values']);
//                    });
//                }
//
//
//            }


//            if (request()->has('tree'))
//                $builder->whereRaw(\request()->input('filter')['query'], \request()->input('filter')['values']);
////
////            $builder->whereRaw(\request()->input('filter')['query'], \request()->input('filter')['values'])
////                    ->whereHas('children', function ($q) {
////                        $q->whereRaw(\request()->input('filter')['query'], \request()->input('filter')['values']);
////                    });
//
//
//            else
//                $builder->whereRaw(\request()->input('filter')['query'], \request()->input('filter')['values']);

//        }


//
//        $builder->where('age', '>', 200);
    }
}