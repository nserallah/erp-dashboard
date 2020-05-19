<?php


namespace Core\Account\Listener;


use App\AccessCode;
use App\SMS;
use Carbon\Carbon;
use Core\Account\Events\CreateAccountEvent;
use Core\Account\Events\VerificationCode;

class CreateDatabaseListener
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
     * @param CreateAccountEvent $event
     * @return void
     */
    public function handle(CreateAccountEvent $event)
    {
        
    }
}