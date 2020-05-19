<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBraintreeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('braintree', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->tinyInteger('status')->comment('0 => error , 1 => success');
            $table->string('nonce')->nullable();
            $table->string('expirationMonth')->nullable();
            $table->string('expirationYear')->nullable();
            $table->string('bin')->nullable();
            $table->string('cardType')->nullable();
            $table->string('lastFour')->nullable();
            $table->string('lastTwo')->nullable();
            $table->string('description')->nullable();
            $table->string('type')->nullable();
            $table->string('prepaid')->nullable();
            $table->string('healthcare')->nullable();
            $table->string('debit')->nullable();
            $table->string('durbinRegulated')->nullable();
            $table->string('commercial')->nullable();
            $table->string('payroll')->nullable();
            $table->string('issuingBank')->nullable();
            $table->string('countryOfIssuance')->nullable();
            $table->string('productId')->nullable();
            $table->string('message')->nullable();
            $table->string('code')->nullable();
            $table->string('name')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('braintree');
    }
}
