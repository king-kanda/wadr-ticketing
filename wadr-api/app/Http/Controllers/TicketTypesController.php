<?php

namespace App\Http\Controllers;

use App\Models\TicketType;
use Illuminate\Http\Request;

class TicketTypesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return TicketType::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'ticket_type' => 'required|string|max:255',
            'description' => 'required|string',
            'details' => 'nullable|string',
            'price' => 'required|numeric',
            'image_url' => 'nullable|url',
        ]);

        return TicketType::create($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(TicketType $ticketType)
    {
        return $ticketType;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TicketType $ticketType)
    {
        $data = $request->validate([
            'ticket_type' => 'string|max:255',
            'description' => 'string',
            'details' => 'nullable|string',
            'price' => 'numeric',
            'image_url' => 'nullable|url',
        ]);

        $ticketType->update($data);
        return $ticketType;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TicketType $ticketType)
    {
        $ticketType->delete();
        return response()->noContent();
    }
}
