<?php


namespace App\SMS;

use App\SMS;
use Carbon\Carbon;
use function GuzzleHttp\Psr7\stream_for;

class SMSManager
{

    public function initializeConnection()
    {
        dd('ss');
//        $client = new \GuzzleHttp\Client();
//        $body = $this->getAuthBody();
//        $header = $this->getHeaders();
//        $response = $client->post(config("twilio.urls.auth"), ['body' => json_encode($body), 'headers' => $header]);
//        $stream = stream_for($response->getBody());
//        $response = json_decode($stream->getContents());

        $sms = new SMS();
      dd($sms->send("00972592872971"  , "hello"));


    }


}