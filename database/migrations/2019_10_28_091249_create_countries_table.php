<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCountriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('countries', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id');
//            $table->foreign('user_id')->references('id')->on('super_admins');
            $table->unsignedBigInteger('currency_id');
//            $table->foreign('currency_id')->references('id')->on('currencies');
            $table->unsignedBigInteger('language_id');
//            $table->foreign('language_id')->references('id')->on('languages');
            $table->json('name');
            $table->json('nationality');
            $table->string('postal_code', 190);
            $table->string('mobile_prefix', 190);
            $table->unsignedTinyInteger('is_active')->default(1);
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
        Schema::dropIfExists('countries');
    }
}
