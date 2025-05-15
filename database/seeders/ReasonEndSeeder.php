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
        ReasonEnd::factory(4)->create();
    }
}
