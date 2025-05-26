<?php

namespace Database\Seeders;

use App\Models\Brand;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $brands = [
            'Caterpillar',
            'Komatsu',
            'John Deere',
            'Hitachi',
            'Volvo',
            'Liebherr',
            'Hyundai',
            'Case',
            'JCB',
            'Bobcat',
            'Doosan',
            'Kubota',
            'Terex',
            'New Holland',
            'Sany',
            'XCMG'
        ];

        foreach ($brands as $brand) {
            Brand::create(['name' => $brand]);
        }
    }
}
