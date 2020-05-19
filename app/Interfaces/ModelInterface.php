<?php
/**
 * Created by PhpStorm.
 * User: WeSSaM
 * Date: 01/12/2019
 * Time: 5:17 PM
 */

namespace App\Interfaces;


use Illuminate\Http\Request;

interface ModelInterface
{


    /**
     * @param Request $request
     * @return mixed
     */
    public function store(Request $request);


    /**
     * @param $params
     * @param $value
     * @return mixed
     */
    public function changeStatus($params, $value);


    /**
     * @param array $attributes
     * @return mixed
     */
    public function get($attributes = []);


    /**
     * @param $id
     * @param Request $request
     * @return mixed
     */
    public function update($id, Request $request);


    /**
     * @param $id
     * @return mixed
     */
    public function findWithResource($id);


    /**
     * @param $id
     * @return mixed
     */
    public function find($id);


    /**
     * @param $id
     * @return mixed
     */
    public function delete($id);


    /**
     * @author WeSSaM
     * @param Request $request
     * @return mixed
     */
    public function paginate(Request $request);


    /**
     * @author WeSSaM
     * @param Request $request
     * @param string $attribute
     * @return mixed
     */
    public function uploadAttachment(Request $request, $attribute = 'attachment');


    /**
     * @author WeSSaM
     * @param Request $request
     * @param string $object
     * @param string $attribute
     * @return mixed
     */
    public function getUserClassPath(Request $request, $object = 'owner_type', $attribute = 'id');
}