<?php

namespace Core\Auth\Listeners;


use Carbon\Carbon;
use Core\Auth\Events\UserAuthentication;
use Core\Auth\Models\AuthLogs;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Http\Request;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Auth;

class AddUserToLog
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param UserAuthentication $event
     * @return void
     */
    public function handle(UserAuthentication $event)
    {
        AuthLogs::create([
            'user_id' => $event->authUser->id,
            'logged_at' => Carbon::now(),
            'model' => get_class($event->authUser),
            'type' => $event->logTransaction,
            'navigator' => json_encode(\request()->input('navigator'))
        ]);
    }
}
