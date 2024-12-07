<?php

use App\Http\Controllers\TicketsController;
use App\Http\Controllers\TicketTypesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::apiResource('tickets' , TicketsController::class);
Route::post('make-payment', [TicketsController::class , 'Paystack']);
Route::apiResource('ticket-types',TicketTypesController::class);

// Route::apiResource('tickets', TicketController::class);
// Route::post('tickets/{ticket}/scan', [TicketController :: class, 'scan']);
// Route::get('events/{event}/tickets', [TicketController :: class, 'getEventTickets']);
// Route::get('/make-payment' ,   [TicketController :: class, 'makePayment']);

