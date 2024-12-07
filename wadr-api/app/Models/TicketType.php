<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class TicketType extends Model
{
    use HasFactory, HasUuids;

    protected $table = 'ticket_types';

    protected $fillable = [
        'ticket_type',
        'description',
        'details',
        'price',
        'imaga_url',
    ];
}
