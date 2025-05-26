<?php

namespace Database\Seeders;

use App\Models\Assigment;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AssigmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Assigment::factory(15)->create();
    }
}
