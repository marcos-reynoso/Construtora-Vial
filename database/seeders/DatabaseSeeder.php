<?php

namespace Database\Seeders;

use App\Models\Maintenance;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        $this->call([
            TypeSeeder::class,
            BrandSeeder::class,
            ProvinceSeeder::class,
            ReasonEndSeeder::class,
            MaintenanceSeeder::class,
            MachineSeeder::class,
            WorkSeeder::class,
            AssigmentSeeder::class,
            AdminUserSeeder::class,
        ]);
    }
}
