<?php

namespace Database\Seeders;

use App\Models\Type;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $types = [
            'Excavadora',
            'Retroexcavadora',
            'Bulldozer',
            'Cargadora',
            'Motoniveladora',
            'Compactadora',
            'Grua',
            'Hormigonera',
            'Camión Volquete',
            'Perforadora',
            'Pala Mecánica',
            'Camión de Carga',
            'Camión de Transporte',
            'Rodillo Compactador',
            'Trituradora',
            'Planta de Asfalto',
            'Camión Cisterna',
            'Manipulador Telescópico'
        ];

        foreach ($types as $type) {
            Type::create(['name' => $type]);
        }
    }
}
