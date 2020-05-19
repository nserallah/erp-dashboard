<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTrialAccountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trial_accounts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedInteger('plan_id');
            $table->unsignedInteger('company_id');
            $table->unsignedInteger('no_renew');
            $table->unsignedTinyInteger('is_transferred')->default(1);
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
        Schema::dropIfExists('trial_accounts');
    }
}
