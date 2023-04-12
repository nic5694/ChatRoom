<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('messageGroup', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('Sender1_id');
            $table->foreign('Sender1_id')
                ->references('id')
                ->on('users');
            $table->unsignedInteger('Sender2_id');
            $table->foreign('Sender2_id')
                ->references('id')
                ->on('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('message_group');
    }
};
