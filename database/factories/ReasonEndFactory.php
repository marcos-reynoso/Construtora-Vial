<?php

namespace Database\Factories;


use App\Models\ReasonEnd;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Reason_end>
 */
class ReasonEndFactory extends Factory
{
    protected $model = ReasonEnd::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->unique()->sentence(2),
        ];
    }
}
