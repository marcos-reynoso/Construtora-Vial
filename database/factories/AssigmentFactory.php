<?php

namespace Database\Factories;

use App\Models\Assigment;
use App\Models\Machine;
use App\Models\ReasonEnd;
use App\Models\Work;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Assigment>
 */
class AssigmentFactory extends Factory
{
    protected $model = Assigment::class;

    public function definition(): array
    {
        $start = $this->faker->dateTimeBetween('-1 year', 'now');
        $end = $this->faker->dateTimeBetween($start, '+6 months');

        return [
            'start_date' => $start,
            'end_date' => $end,
            'mileage' => $this->faker->numberBetween(100, 500),
            'reason_end_id' => ReasonEnd::factory(),
            'machine_id' => Machine::factory(),
            'work_id' => Work::factory(),
        ];
    }
}
