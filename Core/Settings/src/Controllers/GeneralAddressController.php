<?php


namespace Core\Settings\Controllers;


use App\Repositories\GeneralRepository;
use Core\Settings\Repository\GeneralAddressRepository;
use Illuminate\Routing\Controller as BaseController;

class GeneralAddressController extends BaseController
{

    private $respository;

    public function __construct(GeneralAddressRepository $repository)
    {
//        dd();
        $this->respository = $repository;
    }

    function index()
    {
        $genealAddress = $this->respository->all();
        return response()->api(SUCCESS_STATUS, trans('general addresses fetched successfully'), $genealAddress);
    }


    function find($id)
    {
        $genealAddress = $this->respository->find($id);
        return response()->api(SUCCESS_STATUS, trans('general addresses fetched successfully'), $genealAddress);
    }

    function delete($id)
    {
        $genealAddress = $this->respository->delete($id);
        return response()->api(SUCCESS_STATUS, trans('general addresses deleted successfully'), $genealAddress);
    }

}