<?php

namespace Core\Account\Interfaces;


use Illuminate\Http\Request;

interface AccountInterface
{
    /**
     * get specific resources' columns
     *
     * @param array $cols
     * @return mixed
     * @author Amr
     */
    public function get($cols = ['*']);

    /**
     * get single resource according to
     * the given id
     *
     * @param $id
     * @return mixed
     * @author Amr
     */
    public function find($id);

    /**
     * get all resources
     *
     * @return mixed
     * @author Amr
     */
    public function all();

    /**
     * delete resource according
     * to the given id
     *
     * @param $id
     * @return mixed
     *
     * @author Amr
     */
    public function delete($id);

    /**
     * create new resource
     *
     * @param Request $request
     * @return mixed
     *
     * @author Amr
     */
    public function store(Request $request);

    /**
     * update resource
     *
     * @param Request $request
     * @param $id
     * @return mixed
     *
     * @author Amr
     */
    public function update(Request $request, $id);
}