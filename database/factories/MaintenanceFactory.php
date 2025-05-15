<?php

namespace Database\Factories;

use App\Models\Maintenance;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Maintenance>
 */
class MaintenanceFactory extends Factory
{
    protected $model = Maintenance::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->unique()->word(),
            'mileage_aplication' => $this->faker->numberBetween(1000, 100000),
        ];
    }
}
