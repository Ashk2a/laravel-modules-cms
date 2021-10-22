<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDbConnectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('db_connections', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->tinyInteger('type');
            $table->string('host');
            $table->unsignedInteger('port');
            $table->string('database');
            $table->string('prefix')->default('');
            $table->string('username');
            $table->string('password');
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
        Schema::dropIfExists('d_b_connections');
    }
}
