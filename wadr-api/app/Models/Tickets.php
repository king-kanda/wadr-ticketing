<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Tickets extends Model
{
    use HasFactory, HasUuids;

    protected $table = 'tickets';

    protected $fillable =[

        'customer_name',
        'customer_email',
        'transaction_id',
        'scanned',
        'ticket_type_id'

    ];

}
