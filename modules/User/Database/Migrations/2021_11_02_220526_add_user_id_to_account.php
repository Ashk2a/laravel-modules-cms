<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddUserIdToAccount extends Migration
{
    /**
     * @return void
     */
    public function up(): void
    {
        Schema::connection('auth')->table('account', function (Blueprint $table) {
            $table->bigInteger('user_id')->nullable()->after('id');
        });
    }

    /**
     * @return void
     */
    public function down(): void
    {
        Schema::connection('auth')->table('account', function (Blueprint $table) {
            $table->dropColumn('user_id');
        });
    }
}
