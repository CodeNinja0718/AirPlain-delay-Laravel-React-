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
        Schema::create('step6s', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            // $table->string('idOfUser');
            $table->foreign('user_id')->references('id')->on('users');
            $table->string('addressOfPassenger');
            $table->string('birthdayOfPassenger');
            $table->string('cityOfPassenger');
            $table->string('countryOfPassenger');
            $table->string('firstNameOfPassenger');
            $table->string('lastNameOfPassenger');
            $table->string('passportNumberOfPassenger');
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
        Schema::dropIfExists('step6s');
    }
};
