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
            'type_id' => Type::factory(),
            'brand_id' => Brand::factory(),
            'province_id' => Province::factory(),
            'maintenance_id' => Maintenance::factory()
        ];
    }
}
