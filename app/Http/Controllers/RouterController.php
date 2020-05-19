<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class RouterController extends Controller
{
    /**
     * Display the Nova Vue router.
     *
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        return view('router', [
            'user' => $request->user(),
        ]);
    }
}
