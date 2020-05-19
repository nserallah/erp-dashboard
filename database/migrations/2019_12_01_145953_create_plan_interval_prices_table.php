<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlanIntervalPricesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('plan_interval_prices', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('interval_id');
            $table->unsignedBigInteger('plan_id');
            $table->float('price')->default(0);
            $table->unsignedTinyInteger('is_active')->default(1);
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('interval_id')->references('id')->on('constants');
            $table->foreign('plan_id')->references('id')->on('plans');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('plan_interval_prices');
    }
}
