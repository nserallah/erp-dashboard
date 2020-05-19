<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAccountTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('accounts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger("company_id")->unique();
            $table->date('last_payment')->nullable();
            $table->date('expired_date')->nullable();
            $table->date('last_renew_date')->nullable();
            $table->date('sub_domain')->nullable();
            $table->string("db_name")->nullable();
            $table->string("db_user")->nullable();
            $table->string("db_password")->nullable();
            $table->string("db_connection")->nullable();
            $table->tinyInteger("is_active")->default(1)->comment('1 => active, 0 => inactive');
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('company_id')
                ->references('id')
                ->on('companies');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('accounts');
    }
}
