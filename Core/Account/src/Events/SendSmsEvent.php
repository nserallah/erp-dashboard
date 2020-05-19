<?php


namespace Core\Account\Events;


use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Event;

class SendSmsEvent extends Event
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    /**
     * event's model
     *
     * @author Amr
     * @var
     */
    public $model;
    /**
     * event's content
     *
     * @author Amr
     * @var
     */
    public $content;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($model, $content)
    {
        $this->model = $model;
        $this->content = $content;
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