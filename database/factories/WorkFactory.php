<?php

namespace Database\Factories;

use App\Models\Province;
use App\Models\Work;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Work>
 */
class WorkFactory extends Factory
{
    protected $model = Work::class;

    public function definition(): array
    {
        $start = $this->faker->dateTimeBetween('-2 years', 'now');
        $end = $this->faker->dateTimeBetween($start, '+1 year');

        return [
            'name' => $this->faker->unique()->company(),
            'province_id' => Province::factory(),
            'start_date' => $start,
            'end_date' => $end,
        ];
    }
}
