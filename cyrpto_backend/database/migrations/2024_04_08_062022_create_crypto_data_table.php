<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCryptoDataTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('crypto_data', function (Blueprint $table) {
            $table->id();
            $table->string('unix_time', 250);
            $table->dateTime('datetime');
            $table->string('symbol', 250);
            $table->string('open_market', 250);
            $table->string('high_market', 250);
            $table->string('low_market', 250);
            $table->string('close_market', 250);
            $table->string('volume', 250);
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
        Schema::dropIfExists('crypto_data');
    }
};
