<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
             return [
            'name' => fake()->name(),
            'description' => fake()->name(),
            'barcode' => fake()->name(),
            'price' => fake()->numberBetween(30,50),
            'status' => rand(0,1),
            'quantity' => rand(1,8),
            'category_id' => rand(1, 5),
            'image' => rand(1, 12) . '.jpeg',

        ];

    }
}
