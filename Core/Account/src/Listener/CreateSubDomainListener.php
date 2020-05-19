<?php


namespace Core\Account\Listener;


use Core\Account\Events\CreateAccountEvent;

class CreateSubDomainListener
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