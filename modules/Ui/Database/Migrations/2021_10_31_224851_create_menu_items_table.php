<?php

use Modules\Ui\Models\MenuItem;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMenuItemsTable extends Migration
{
    /**
     * @return void
     */
    public function up(): void
    {
        Schema::create('menu_items', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('scope');
            $table->integer('type');
            $table->integer('position');
            $table->foreignId('parent_id')->nullable()->references('id')->on('menu_items');
            $table->json('name');
            $table->integer('type_href')->nullable();
            $table->string('href')->nullable();
            $table->integer('auth_condition')->default(MenuItem::AUTH_CONDITION_NONE);
            $table->foreignId('required_permission_id')->nullable()->references('id')->on('permissions')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('menu_items');
    }
}
