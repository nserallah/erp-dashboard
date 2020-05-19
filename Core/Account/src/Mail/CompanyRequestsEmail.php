<?php

namespace Core\Account\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class CompanyRequestsEmail extends Mailable
{
    use Queueable, SerializesModels;

    private $model;
    private $content;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($model, $content)
    {
        $this->model = $model;
        $this->content = $content;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from(config('mail.from.address'))
            ->to($this->model->email)->with('content', $this->content)
            ->markdown('Account::email.company.requests');
    }
}
