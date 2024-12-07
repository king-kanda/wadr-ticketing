<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TicketType;

class TicketTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        TicketType::create([
            'ticket_type' => 'Standard',
            'description' => 'General admission ticket.',
            'details' => 'Includes access to all general areas.',
            'price' => 50.00,
            'imaga_url' => 'https://example.com/images/standard.jpg',
        ]);

        TicketType::create([
            'ticket_type' => 'VIP',
            'description' => 'VIP admission ticket.',
            'details' => 'Includes access to VIP lounge and priority seating.',
            'price' => 150.00,
            'imaga_url' => 'https://example.com/images/vip.jpg',
        ]);
    }
}
