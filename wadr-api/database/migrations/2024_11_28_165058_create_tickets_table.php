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
        Schema::create('tickets', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->timestamps();
            $table->string('customer_name');
            $table->string('customer_email');
            $table->string('transaction_id');
            $table->boolean('scanned');
            $table->uuid('ticket_type_id');
            $table->foreign('ticket_type_id')->references('id')->on('ticket_types')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
