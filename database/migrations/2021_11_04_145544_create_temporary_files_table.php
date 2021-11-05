<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTemporaryFilesTable extends Migration
{
    /**
     * @return void
     */
    public function up(): void
    {
        Schema::create('temporary_files', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('token');
            $table->string('collection')->default('default');
            $table->timestamps();
        });
    }

    /**
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('temporary_files');
    }
}
