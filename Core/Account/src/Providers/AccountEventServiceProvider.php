<?php


namespace Core\Account\Providers;

use Core\Account\Events\SendEmailEvent;
use Core\Account\Events\SendSmsEvent;
use Core\Account\Events\VerificationCode;
use Core\Account\Listener\EmailListener;
use Core\Account\Listener\SmsListener;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;


class AccountEventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class
        ],
        VerificationCode::class => [
            SmsListener::class
        ],
        SendEmailEvent::class => [
            EmailListener::class
        ],
        SendSmsEvent::class => [
            SmsListener::class
        ]
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

    }
}