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
            'mileage' => $this->faker->numberBetween(100, 9000),
            'reason_end_id' => ReasonEnd::inRandomOrder()->first()->id,
            'machine_id' => Machine::inRandomOrder()->first()->id,
            'work_id' => Work::inRandomOrder()->first()->id,
        ];
    }
}
