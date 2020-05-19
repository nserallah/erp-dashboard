<?php

namespace Core\Account\Listener;

use App\AccessCode;
use App\Company;
use App\SMS;
use Carbon\Carbon;
use Core\Account\Events\VerificationCode;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Event;

class SmsListener
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
     * @param Event
     * @return void
     */
    public function handle(Event $event)
    {
////        $sms = new SMS();
//        $classPath = get_class($event->model);
//        $accessCode = AccessCode::generate();
//        $message = "Your access code is " . $accessCode;
////        $sms->send($event->model->mobile, $message);
//        AccessCode::where(['model' => $classPath, 'model_id' => $event->model->id])->delete();
//        AccessCode::where([
////            'type' => ACTIVATION_CODE,
//            'model' => $classPath, 'model_id' => $event->model->id])->delete();
//        AccessCode::create([
//            'code' => $accessCode,
////            'type' => ACTIVATION_CODE,
//            'model' => $classPath,
//            'model_id' => $event->model->id,
//            'expires' => Carbon::now()->addDays(7)
//        ]);
//        $event->model->remember_token = md5(uniqid());
//        $event->model->update();

    }
}
