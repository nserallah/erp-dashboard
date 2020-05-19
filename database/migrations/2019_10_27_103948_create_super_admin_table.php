<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSuperAdminTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('super_admins', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('username')->unique();
            $table->string('email')->unique();
            $table->string('password');
            $table->unsignedTinyInteger('is_active')->default(1)
                ->comment('0 => is not active , 1 => active');
            $table->integer('mobile');
            $table->unsignedBigInteger('city_id');
            $table->unsignedBigInteger('nationality_id');
            $table->string('address');
            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes();
            $table->unsignedBigInteger('user_id')->nullable();

            $table->foreign('user_id')
                ->references('id')
                ->on('super_admins');


//            $table->foreign('city_id')
//                ->references('id')
//                ->on('cities');
//
//            $table->foreign('nationality_id')
//                ->references('id')
//                ->on('countries');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('super_admins');
    }
}
