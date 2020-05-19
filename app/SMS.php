<?php

namespace App;

use App\Exceptions\InvalidSMSTokenException;
use Carbon\Carbon;
use function GuzzleHttp\Psr7\stream_for;
use http\Exception;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Twilio\Rest\Client;

class SMS extends BaseModel
{
    use SoftDeletes;
    /**
     * table name
     * @author Am
     * @var string
     */
    protected $table = 'sms';
    /**
     * table's columns
     * @author Amr
     * @var array
     */
    protected $fillable = ['token', 'token_type', 'expires', 'type', 'extra'];

    /**
     * save the token of sms api
     * @param $data
     * @return mixed
     * @author Amr
     */
    static function saveToken($data)
    {
        $sms = $data;
        $expire = time() + $data->expires;;
        $sms->expires = Carbon::parse($expire);
        $sms->extra['user'] = $data->user;
        $sms->extra['roles'] = $data->user;
        $sms->extra = json_encode($sms->extra);
        $sms->token = $data->jwt;
        unset($sms->user, $sms->roles, $sms->jwt);
        $sms = (array)$sms;
        return self::create($sms);
    }

    /**
     * this function for checking if there
     * is any saved valid token
     *
     * @return bool
     * @author Amr
     */
    function checkToken()
    {
        $smsToken = SMS::where('expires', '>', Carbon::now())->get()->last();
        if (!$smsToken) {
            throw new InvalidSMSTokenException();
        }
        return $smsToken;
    }

    /**
     * @return bool
     */
    public function login()
    {
        try {
            $client = new \GuzzleHttp\Client();
            $body = $this->getAuthBody();
            $header = $this->getHeaders();
//            dd($header , $body);
            $response = $client->post(config("twilio.urls.auth"), ['body' => json_encode($body), 'headers' => $header]);
            $stream = stream_for($response->getBody());
            $response = json_decode($stream->getContents());
            self::saveToken($response);
            return true;
        } catch (\Exception $exception) {
            return false;
        }
    }

    /**
     * get api token
     *
     * @return bool
     * @author Amr
     */
    function initialize()
    {
        try {
            $token = $this->checkToken();
            return $token;
        } catch (InvalidSMSTokenException $invalidSMSTokenException) {
            $this->login();
        }
        return $this->initialize();
    }

    /**
     * send message to client
     *
     * @param $to
     * @param $message
     * @return mixed|\Psr\Http\Message\StreamInterface
     * @throws \Exception
     * @author Amr
     */
    function send($to, $message)
    {

        $token = $this->initialize();                                                                                   // get token @author Amr
        $body = [
            'to' => $to,
            'message' => $message,
//            "sender_id" => config('app.name'),
            "from" => config('app.name')
        ];
        $header = $this->getHeaders($token->token);                                                                     // prepare the request's header @author Amr
        $client = new \GuzzleHttp\Client();
        $response = $client->post(config("twilio.urls.send_sms"),
            ['body' => json_encode($body), 'headers' => $header]);                                                      // send the request @author Amr
        $stream = stream_for($response->getBody());                                                                     // get the content of response @author Amr
        $stream = json_decode($stream);
        if (!$stream) {
            throw new \Exception(trans('lang.could_not_send_message'));
        }
        return $stream;

    }


    /**
     * this the body of auth request
     *
     * @return array
     * @author Amr
     */
    private function getAuthBody()
    {
        return [
            'client_id' => config("twilio.client_id"),
            'secret' => config("twilio.secret_id")
        ];
    }

    /**
     * this is the header of all requests
     *
     * @return array
     */
    private function getHeaders($token = null)
    {
        $headers = [
            'Accept' => 'application/json',
            'Content-Type' => 'application/json',
        ];
        if ($token) {
            $headers['Authorization'] = $token;
        }
        return $headers;
    }

    /**
     * prepare the token
     *
     * @return string
     * @author Amr
     */
    public function getTokenAttribute()
    {
        return $this->attributes['token_type'] . ' ' . $this->attributes['token'];
    }

}
