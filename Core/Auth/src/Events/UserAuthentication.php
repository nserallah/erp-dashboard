<?php

namespace Core\Auth\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class UserAuthentication
{
    use Dispatchable, InteractsWithSockets, SerializesModels;


    /**
     * this attribute indicates if the transaction
     * was login or logout
     *
     * @author Amr
     * @var
     */
    public $logTransaction;
    /**
     * authenticated user
     *
     * @author Amr
     *
     */
    public $authUser;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($logTransaction, $authUser = null)
    {
        if (is_null($authUser)) {
            $this->authUser = auth_user();              // if developer passed no user, get the auth_user() @author Amr
        } else {
            $this->authUser = $authUser;
        }
        $this->logTransaction = $logTransaction;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}
