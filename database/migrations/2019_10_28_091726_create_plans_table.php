<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('plans', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('currency_id');
            $table->unsignedBigInteger('level_id');
            $table->json('title');
//            $table->json('description');
//            $table->float('price_month');
//            $table->float('price_year');
            $table->unsignedInteger('branch_no')->default(0);
            $table->unsignedInteger('inventory_no')->default(0);
            $table->unsignedInteger('pos_no')->default(0);
            $table->unsignedInteger('emp_no')->default(0);
            $table->unsignedInteger('item_no')->default(0);
            $table->unsignedInteger('max_trail_no')->default(0);
            $table->unsignedInteger('interval_trail')->default(0);
            $table->unsignedTinyInteger('is_trial')->default(0);
            $table->unsignedTinyInteger('is_active')->default(1);
            $table->timestamps();
            $table->softDeletes();
//            $table->foreign('user_id')->references('id')->on('super_admins');
//            $table->foreign('currency_id')->references('id')->on('currencies');
//            $table->foreign('level_id')->references('id')->on('constants');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('plans');
    }
}
