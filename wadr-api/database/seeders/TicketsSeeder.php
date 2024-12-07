<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Tickets;

class TicketsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        Tickets::create([
            'customer_name'=>'John Stomes',
            'customer_email'=>'stevenokanda@gmail.com',
            'transaction_id'=>'jh499wc64scs',
            'scanned'=>false,
            'ticket_type_id'=>'9d992851-a82e-4032-b917-60646d7ab9fb'
        ]);

    }
}
