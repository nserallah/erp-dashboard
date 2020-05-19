<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableMigrationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('table_migrations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('migration');
            $table->timestamp('ordered_at')->nullable();
            $table->string('path');
            $table->string('type')->default('company');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('table_migrations');
    }
}
