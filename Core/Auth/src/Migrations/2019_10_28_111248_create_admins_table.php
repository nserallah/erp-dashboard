<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdminsTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
//        Schema::create('admins', function (Blueprint $table) {
//            $table->bigIncrements('id');
//            $table->string('username')->unique();
//            $table->string('email')->unique();
//            $table->string('password');
//            $table->unsignedTinyInteger('is_active')
//                ->default(1)
//                ->comment('0 => is not active , 1 => active');
//            $table->rememberToken();
//            $table->timestamps();
//            $table->softDeletes();
//            $table->unsignedBigInteger('user_id')->nullable();
//            $table->foreign('user_id')
//                ->references('id')
//                ->on('admins');
//        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
//        Schema::dropIfExists('admins');
    }
}
