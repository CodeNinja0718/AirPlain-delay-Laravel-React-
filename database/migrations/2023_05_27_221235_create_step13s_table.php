<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('step13s', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->boolean('indexOfReroute')->default(false);
            $table->string('timeofArriveFinalDestination');
            $table->string('dateOfArriveFinalDestination');
            $table->Integer('indexOfPreferedLanguageOfCommunication');
            $table->boolean('indexOfMissConnection')->default(false);
            $table->Integer('indexOfticket');
            $table->string('websiteOfBuyTicket'); 
            $table->boolean('indexOfContactAirline')->default(false);
            $table->string('step13_filename');
            $table->string('step13_filepath');
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
        Schema::dropIfExists('step13s');
    }
};
