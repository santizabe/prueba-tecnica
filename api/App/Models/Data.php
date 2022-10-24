<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Data extends Model
{
    use HasFactory;
    protected $fillable = ['nombre_completo', 'tipo_documento', 'numero_documento', 'indicativo', 'numero_celular'];
}
