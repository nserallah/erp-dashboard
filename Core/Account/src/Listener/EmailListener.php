<?php


namespace Core\Account\Listener;


use Core\Account\Events\SendEmailEvent;
use Core\Account\Mail\CompanyRequestsEmail;
use Illuminate\Support\Facades\Mail;

class EmailListener
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
     * @param SendEmailEvent $event
     * @return void
     */
    public function handle(SendEmailEvent $event)
    {
        Mail::to($event->model)->send(new CompanyRequestsEmail($event->model, $event->content));
        $event->model->emails()->create(['content' => $event->content]);
    }
}