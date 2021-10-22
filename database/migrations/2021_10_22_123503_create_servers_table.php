<?php

use App\Models\Auth\Realmlist;
use App\Models\DbConnection;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(): void
    {
        Schema::create('servers', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Realmlist::class, 'realmlist_id')->unique();
            $table->foreignId('world_db_connection_id')->unique()->references('id')->on('db_connections');
            $table->foreignId('characters_db_connection_id')->unique()->references('id')->on('db_connections');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('servers');
    }
}
