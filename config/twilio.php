<?php
return [

    /*
    |--------------------------------------------------------------------------
    | TWILIO Defaults
    |--------------------------------------------------------------------------
    |
    |  Twilio client id, you can find it in the Twilio account settings
    */
    "client_id" => env("TWILIO_CLIENT_ID", ''),
    /*
    |  Twilio secret id
    */
    "secret_id" => env("TWILIO_SECRET_ID", ''),
    /*
    |--------------------------------------------------------------------------
    | TWILIO URLS
    |--------------------------------------------------------------------------
    | the twilio used url
    */
    "urls" => [
        "auth" => "https://auth.sms.to/oauth/token",
        'send_sms' => "https://api.sms.to/sms/send"
    ]
];