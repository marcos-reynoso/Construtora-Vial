<?php

namespace Database\Seeders;


use App\Models\ReasonEnd;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ReasonEndSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $reasons = [
            'Fase completa',
            'Avería',
            'Cancelada por el cliente',
            'Condiciones climáticas adversas',
            'Falta de materiales',
            'En proceso',
            'Avería técnica',
            'Retrasos logísticos',
            'Termino su parte del trabajo'

        ];

        foreach ($reasons as $reason) {
            ReasonEnd::create(['name' => $reason]);
        }
    }
}
