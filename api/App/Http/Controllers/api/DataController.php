<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Data;

class DataController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       $prueba = new Data();
       $prueba->nombre_completo = $request -> nombre_completo;
       $prueba->tipo_documento = $request->tipo_documento;
       $prueba->numero_documento = $request->numero_documento;
       $prueba->indicativo = $request->indicativo;
       $prueba->numero_celular = $request->numero_celular;

       $prueba->save();
    }
}
