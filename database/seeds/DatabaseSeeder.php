<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
//        $this->call(CompanyConstantsSeeder::class);


        $this->call(ConstantTableSeeder::class);
        $this->call(CurrenciesSeeder::class);
        $this->call(CountriesSeeder::class);
        $this->call(CitySeeder::class);
        $this->call(LanguagesSeeder::class);
        $this->call(SuperAdminSeeder::class);
        $this->call(PlanTableSeeder::class);
        $this->call(PlanIntervalPriceSeeder::class);

//
//        $this->call(ConstantTableSeeder::class);
//
//
////        $this->call(ConstantTableSeeder::class);
//        $this->call(CompanyConstantsSeeder::class);
//        $this->call(CurrenciesSeeder::class);
//        $this->call(CountriesSeeder::class);
//        $this->call(CitySeeder::class);
//        $this->call(LanguagesSeeder::class);
//        $this->call(SuperAdminSeeder::class);
//        $this->call(PlanTableSeeder::class);


//        $this->call(CurrenciesSeeder::class);
//        $this->call(ChartTypeSeeder::class);
//        $this->call(AccountNatureSeeder::class);
//        $this->call(FinalAccountType::class);
//        $this->call(DiscountTypesSeeder::class);
//        $this->call(ConstantTableSeeder::class);
//        $this->call(LanguagesSeeder::class);
//        $this->call(NationalitiesSeeder::class);


//        $this->call(CountriesSeeder::class);
//        $this->call(CitySeeder::class);
//        $this->call(CurrenciesSeeder::class);

//        $this->call(ChartTypeSeeder::class);
//        $this->call(AccountNatureSeeder::class);
//        $this->call(FinalAccountType::class);
//        $this->call(CompanyConstantsSeeder::class);
//        $this->call(ConstantTableSeeder::class);
//        $this->call(SuperAdminSeeder::class);
//        $this->call(ProductServiceConstantsTableSeeder::class);
//        $this->call(PaymentMethodSeeder::class);
//        $this->call(PaymentTypeSeeder::class);
//        $this->call(TableMigrationsSeeder::class);

    }
}
