<?php

use Illuminate\Database\Seeder;

class ConstantTableSeeder extends Seeder
{
//    /**
//     * Run the database seeds.
//     *
//     * @return void
//     */
//
//    public function run()
//    {
//        foreach ($this->constants() as $item) {
//            $constant = \App\Constant::updateOrCreate(['key' => $item['key']], (new \Illuminate\Http\Request($item))->only(\App\Constant::FILLABLE));
//            $constant->saveChildren(@$item['children']);
//        }
//    }


    /**
     *
     * @author Amr
     * @var string
     */
    private $file_name = 'constants.json';
    private $seeds_path = 'config';

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $currencies = $this->loadFile();                 // get the content of $currencyFileName fields @author Amr
        $currencies = (array)json_decode($currencies);
        $this->fill($currencies);
    }

    /**
     * load the content of file after reading it
     * and converting the content from json
     * to Array
     *
     * @return string
     * @author Amr
     */
    public function loadFile()
    {
        return file_get_contents(database_path($this->seeds_path . '/' . $this->file_name));
    }

    /**
     * fill database with currencies
     *
     * @param array $items
     * @author Amr
     */
    public function fill(array $items)
    {
        foreach ($items as $index => $item) {
            \App\Constant::create([
                'user_id' => 1,
                'id' => $item->id,
                'parent_id' => $item->parent_id,
                'name' => $this->getName($item),
                'key' => $item->key,
                'value' =>(array) json_decode($item->value),
                'is_active' => 1,
            ]);
        }
    }

    /**
     * format the value of name
     * according to its type
     *
     * @param $currency
     * @author Amr
     * @return array
     */
    /**
     * format the name of country
     *
     * @param array $country
     * @author Amr
     * @return array
     */
    private function getName($object)
    {
        return [
            'en' => @json_decode($object->name)->en,
            'ar' => @json_decode($object->name)->ar,
        ];
    }

    private function constants()
    {
        return array(
            [
                'user_id' => 0,
                'key' => 'PLAN_LEVEL',
                'name' => ['ar' => 'مستويات الخطة', 'en' => 'Plan Levels'],
                'value' => [],
                'children' => [
                    array(
                        'name' => ['ar' => 'مبتدئ', 'en' => 'Beginner'],
                        'value' => []
                    ),
                    array(
                        'name' => ['ar' => 'متوسط', 'en' => 'Intermediate'],
                        'value' => []
                    ),
                    array(
                        'name' => ['ar' => 'متقدم', 'en' => 'Advanced'],
                        'value' => []
                    )
                ],
            ],
            [
                'user_id' => 0,
                'key' => 'MODULE',
                'name' => ['ar' => 'الأنظمة', 'en' => 'Modules'],
                'value' => [],
                'children' => [
                    array(
                        'name' => ['ar' => 'المخازن', 'en' => 'Inventory & Item'],
                        'value' => ['path' => 'db_inventory_path']
                    ),
                    array(
                        'name' => ['ar' => 'المبيعات', 'en' => 'Sales'],
                        'value' => ['path' => 'db_sales_path']
                    ),
                    array(
                        'name' => ['ar' => 'المشتريات', 'en' => 'Purchase'],
                        'value' => ['path' => 'db_purchases_path']
                    ),
                    array(
                        'name' => ['ar' => 'المستخدمين', 'en' => 'Users'],
                        'value' => ['path' => 'db_users_path']
                    ),
                    array(
                        'name' => ['ar' => 'الإشتراكات', 'en' => 'Subscription'],
                        'value' => ['path' => 'db_subscription_path']
                    ),
                    array(
                        'name' => ['ar' => 'الموظفين', 'en' => 'Employee'],
                        'value' => ['path' => 'db_employee_path']
                    ),
                    array(
                        'name' => ['ar' => 'المشاريع', 'en' => 'Projects'],
                        'value' => ['path' => 'db_projects_path']
                    ),
                    array(
                        'name' => ['ar' => 'التقارير', 'en' => 'Reports'],
                        'value' => ['path' => 'db_reports_path']
                    ),
                    array(
                        'name' => ['ar' => 'الإحصائيات والتحليل', 'en' => 'Statistics & Analysis'],
                        'value' => ['path' => 'db_statistics_path']
                    ),
                    array(
                        'name' => ['ar' => 'الزبائن', 'en' => 'Customers'],
                        'value' => ['path' => 'db_customers_path']
                    ),
                    array(
                        'name' => ['ar' => 'الموردين', 'en' => 'Suppliers'],
                        'value' => ['path' => 'db_suppliers_path']
                    ),
                ],
            ],
            [
                'user_id' => 0,
                'key' => 'COMPANY_CONTRIBUTION_TYPE',
                'name' => ['ar' => 'Contribution Type', 'en' => 'Contribution Type'],
                'value' => [],
                'children' => [
                    array(
                        'name' => ['ar' => 'مساهمة محدودة', 'en' => 'Contribution Limits'],
                        'value' => []
                    ),
                    array(
                        'name' => ['ar' => 'غير مساهمة', 'en' => 'No Contribution'],
                        'value' => []
                    ),
                ],
            ],
            [
                'user_id' => 0,
                'key' => 'COMPANY_SIZE',
                'name' => ['ar' => 'حجم الشركة', 'en' => 'Company Size'],
                'value' => [],
                'children' => [
                    array(
                        'name' => ['ar' => '5-10', 'en' => '5-10'],
                        'value' => []
                    ),
                    array(
                        'name' => ['ar' => '10-20', 'en' => '10-20'],
                        'value' => []
                    ),
                    array(
                        'name' => ['ar' => '20-50', 'en' => '20-50'],
                        'value' => []
                    ),
                    array(
                        'name' => ['ar' => '>50', 'en' => '>50'],
                        'value' => []
                    ),
                ],
            ],
//            [
//                'user_id' => 0,
//                'key' => 'company_type_activity',
//                'name' => ['ar' => 'نوع نشاط الشركة', 'en' => 'Company Type Activity'],
//                'value' => [],
//                'children' => [
//                    array(
//                        'name' => ['ar' => 'ملابس', 'en' => 'Clothes'],
//                        'value' => []
//                    ),
//                    array(
//                        'name' => ['ar' => 'إلكترونيات', 'en' => 'Electronics'],
//                        'value' => []
//                    ),
//                    array(
//                        'name' => ['ar' => 'أطعمة ومواد غذائية', 'en' => 'Food'],
//                        'value' => []
//                    ),
//                    array(
//                        'name' => ['ar' => 'التصنيع', 'en' => 'Manufacturing'],
//                        'value' => []
//                    ),
//                ],
//            ],
        );
    }
}
