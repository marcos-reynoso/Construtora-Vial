<?php

namespace Database\Seeders;

use App\Models\Maintenance;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MaintenanceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $maintenances = [
            ['name' => 'Cambio de aceite', 'mileage_application' => 700],
            ['name' => 'Revisión general', 'mileage_application' => 500],
            ['name' => 'Cambio de filtros', 'mileage_application' => 7000],
            ['name' => 'Ajuste de frenos', 'mileage_application' => 800],
            ['name' => 'Revisión de transmisión', 'mileage_application' => 1000],
            ['name' => 'Lubricación de partes móviles', 'mileage_application' => 3000],
            ['name' => 'Control de sistema hidráulico', 'mileage_application' => 9000],
            ['name' => 'Revisión de orugas', 'mileage_application' => 12000],
            ['name' => 'Revisión de sistema eléctrico', 'mileage_application' => 1500],
            ['name' => 'Cambio de bujías', 'mileage_application' => 2000],
            ['name' => 'Revisión de frenos', 'mileage_application' => 600],
            ['name' => 'Ajuste de orugas', 'mileage_application' => 1100],
            ['name' => 'Revisión eléctrica', 'mileage_application' => 1300],
            ['name' => 'Revisión hidráulica', 'mileage_application' => 1600],
        ];

        foreach ($maintenances as $m) {
            Maintenance::create($m);
        }
    }
}
