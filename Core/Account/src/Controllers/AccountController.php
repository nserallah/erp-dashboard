<?php

namespace Core\Account\Controllers;

use App\Exceptions\DatabaseCreationException;
use Core\Account\Interfaces\AccountInterface;
use Core\Account\Requests\AccountRequest;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class AccountController extends BaseController
{

    private $accountRepository;

    public function __construct(AccountInterface $accountRepository)
    {
        $this->accountRepository = $accountRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view("Account::welcome");
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(AccountRequest $request)
    {
        try {
            $result = $this->accountRepository->store($request);
            return response()->api(SUCCESS_RESPONSE, $result['message'], $result['account']);
        } catch (DatabaseCreationException $databaseCreationException) {
            return response()->api(ERROR_RESPONSE, $databaseCreationException->getMessage(), [], $databaseCreationException->getCode());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
