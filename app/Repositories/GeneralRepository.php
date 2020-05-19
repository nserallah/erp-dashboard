<?php


namespace App\Repositories;


use App\Traits\HasFilters;
use App\Traits\RepositoryModel;
use Illuminate\Database\Eloquent\Model;

class GeneralRepository
{
    /**
     * it contains all filter's
     * operations
     * @author Amr
     */
    use RepositoryModel, HasFilters;
    /**
     * repo.'s  model
     * @author Amr
     * @var Model
     */
    public $model;

    /**
     * BaseRepository constructor.
     * @param Model $model
     * @author Amr
     */
    public function __construct($model = null)
    {
//        if (!$model && class_exists($this->model))
//            $model = new $this->model;
//        $this->model = $model;
    }
}