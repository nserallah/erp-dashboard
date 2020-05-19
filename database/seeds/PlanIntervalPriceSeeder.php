<?php

use Illuminate\Database\Seeder;

class PlanIntervalPriceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $constants = \App\Constant::where(['key' => 'INTERVAL_TYPE'])->get();
        $plans = \App\Plan::all();
        foreach ($plans as $plan) {
            $constant = $constants->shuffle()->first();
            $plan->planIntervals()->create([
                'interval_id' => $constant->id,
                'price' => rand(1, 10000),
                'is_active' => 1
            ]);
        }
    }
}
