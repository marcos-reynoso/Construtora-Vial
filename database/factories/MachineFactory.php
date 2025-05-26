<?php

namespace Database\Factories;

use App\Models\Brand;
use App\Models\Machine;
use App\Models\Maintenance;
use App\Models\Province;
use App\Models\Type;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Machine>
 */
class MachineFactory extends Factory
{
    protected $model = Machine::class;

    public function definition(): array
    {
        return [
            'num_ser' => $this->faker->unique()->regexify('[A-Z0-9]{10}'),
            'type_id' => Type::inRandomOrder()->first()->id,
            'brand_id' => Brand::inRandomOrder()->first()->id,
            'province_id' => Province::inRandomOrder()->first()->id,
            'maintenance_id' => Maintenance::inRandomOrder()->first()->id,
        ];
    }
}
