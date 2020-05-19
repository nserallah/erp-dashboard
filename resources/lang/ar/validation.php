<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */
    'accepted' => 'يجب قبول :attribute',
    'active_url' => ':attribute لا يُمثّل رابطًا صحيحًا',
    'after' => 'يجب على :attribute أن يكون تاريخًا لاحقًا ل :date.',
    'after_or_equal' => ':attribute يجب أن يكون تاريخاً لاحقاً أو مطابقاً ل :date.',
    'alpha' => 'يجب أن لا يحتوي :attribute سوى على حروف',
    'alpha_dash' => 'يجب أن لا يحتوي :attribute على حروف، أرقام ومطّات.',
    'alpha_num' => 'يجب أن يحتوي :attribute على حروفٍ وأرقامٍ فقط',
    'array' => 'يجب أن يكون :attribute ًمصفوفة',
    'before' => 'يجب على :attribute أن يكون تاريخًا سابقًا ل:date.',
    'before_or_equal' => ':attribute يجب أن يكون تاريخا سابقا أو مطابقا ل :date',
    'between' => [
        'numeric' => 'يجب أن تكون قيمة :attribute بين :min و :max.',
        'file' => 'يجب أن يكون حجم الملف :attribute بين :min و :max كيلوبايت.',
        'string' => 'يجب أن يكون عدد حروف النّص :attribute بين :min و :max',
        'array' => 'يجب أن يحتوي :attribute على عدد من العناصر بين :min و :max',
    ],
    'boolean' => 'يجب أن تكون قيمة :attribute إما true أو false ',
    'confirmed' => 'حقل التأكيد غير مُطابق للحقل :attribute',
    'date' => ':attribute ليس تاريخًا صحيحًا',
    'date_format' => 'لا يتوافق :attribute مع الشكل :format.',
    'different' => 'يجب أن يكون الحقلان :attribute و :other مُختلفان',
    'digits' => 'يجب أن يحتوي :attribute على :digits رقمًا/أرقام',
    'digits_between' => 'يجب أن يحتوي :attribute بين :min و :max رقمًا/أرقام ',
    'dimensions' => 'الـ :attribute يحتوي على أبعاد صورة غير صالحة.',
    'distinct' => 'للحقل :attribute قيمة مُكرّرة.',
    'email' => 'يجب أن يكون :attribute عنوان بريد إلكتروني صحيح البُنية',
    'exists' => 'القيمة المحددة :attribute غير موجودة',
    'file' => 'الـ :attribute يجب أن يكون ملفا.',
    'filled' => ':attribute إجباري',
    'image' => 'يجب أن يكون :attribute صورةً',
    'in' => ':attribute لاغٍ',
    'in_array' => ':attribute غير موجود في :other.',
    'integer' => 'يجب أن يكون :attribute عددًا صحيحًا',
    'ip' => 'يجب أن يكون :attribute عنوان IP صحيحًا',
    'ipv4' => 'يجب أن يكون :attribute عنوان IPv4 صحيحًا.',
    'ipv6' => 'يجب أن يكون :attribute عنوان IPv6 صحيحًا.',
    'json' => 'يجب أن يكون :attribute نصآ من نوع JSON.',
    'max' => [
        'numeric' => 'يجب أن تكون قيمة :attribute مساوية أو أصغر لـ :max.',
        'file' => 'يجب أن لا يتجاوز حجم الملف :attribute :max كيلوبايت',
        'string' => 'يجب أن لا يتجاوز طول النّص :attribute :max حروفٍ/حرفًا',
        'array' => 'يجب أن لا يحتوي :attribute على أكثر من :max عناصر/عنصر.',
    ],
    'mimes' => 'يجب أن يكون ملفًا من نوع : :values.',
    'mimetypes' => 'يجب أن يكون ملفًا من نوع : :values.',
    'min' => [
        'numeric' => 'يجب أن تكون قيمة :attribute مساوية أو أكبر لـ :min.',
        'file' => 'يجب أن يكون حجم الملف :attribute على الأقل :min كيلوبايت',
        'string' => 'يجب أن يكون طول النص :attribute على الأقل :min حروفٍ/حرفًا',
        'array' => 'يجب أن يحتوي :attribute على الأقل على :min عُنصرًا/عناصر',
    ],
    'not_in' => ':attribute لاغٍ',
    'numeric' => 'يجب على :attribute أن يكون رقمًا',
    'present' => 'يجب تقديم :attribute',
    'regex' => 'صيغة :attribute .غير صحيحة',
    'required' => ' حقل :attribute مطلوب.',
    'required_if' => ':attribute مطلوب في حال ما إذا كان :other يساوي :value.',
    'required_unless' => ':attribute مطلوب في حال ما لم يكن :other يساوي :values.',
    'required_with' => ':attribute مطلوب إذا توفّر :values.',
    'required_with_all' => ':attribute مطلوب إذا توفّر :values.',
    'required_without' => ':attribute مطلوب إذا لم يتوفّر :values.',
    'required_without_all' => ':attribute مطلوب إذا لم يتوفّر :values.',
    'same' => 'يجب أن يتطابق :attribute مع :other',
    'size' => [
        'numeric' => 'يجب أن تكون قيمة :attribute مساوية لـ :size',
        'file' => 'يجب أن يكون حجم الملف :attribute :size كيلوبايت',
        'string' => 'يجب أن يحتوي النص :attribute على :size حروفٍ/حرفًا بالظبط',
        'array' => 'يجب أن يحتوي :attribute على :size عنصرٍ/عناصر بالظبط',
    ],
    'string' => 'يجب أن يكون :attribute نصآ.',
    'timezone' => 'يجب أن يكون :attribute نطاقًا زمنيًا صحيحًا',
    'unique' => 'قيمة :attribute مُستخدمة من قبل',
    'uploaded' => 'فشل في تحميل الـ :attribute',
    'url' => 'صيغة الرابط :attribute غير صحيحة',
    'gt' => [
        'numeric' => 'قيمة :attribute يجب أن تكون أكبر من :value .',
        'file' => 'قيمة :attribute يجب أن تكون أكبر من :value كيلو بايت .',
        'string' => 'قيمة :attribute يجب أن تكون أكبر من :value حروف .',
        'array' => 'قيمة :attribute يجب أن تكون أكبر من :value عناصر .',
    ],
    'gte' => [
        'numeric' => 'قيمة :attribute يجب أن تكون أكبر من أو يساوي :value .',
        'file' => 'قيمة :attribute يجب أن تكون أكبر من أو يساوي :value كيلو بايت .',
        'string' => 'قيمة :attribute يجب أن تكون أكبر من أو يساوي :value حروف .',
        'array' => 'قيمة :attribute يجب أن تكون أكبر من أو يساوي :value عناصر .',
    ],
    'lt' => [
        'numeric' => 'قيمة :attribute يجب أن تكون أصغر من :value .',
        'file' => 'قيمة :attribute يجب أن تكون أصغر من :value كيلو بايت .',
        'string' => 'قيمة :attribute يجب أن تكون أصغر من :value حروف .',
        'array' => 'قيمة :attribute يجب أن تكون أصغر من :value عناصر .',
    ],
    'lte' => [
        'numeric' => 'قيمة :attribute يجب أن تكون أصغر من أو يساوي :value .',
        'file' => 'قيمة :attribute يجب أن تكون أصغر من أو يساوي :value كيلو بايت .',
        'string' => 'قيمة :attribute يجب أن تكون أصغر من أو يساوي :value حروف .',
        'array' => 'قيمة :attribute يجب أن تكون أصغر من أو يساوي :value عناصر .',
    ],
    'uuid' => 'The :attribute must be a valid UUID.',
    'insufficient_fund' => 'المبلغ غير متوفر',
    'incorrect_installment_interval' => 'يجب أن يكون تاريخ البداية والنهاية أكبر من  مدة القسط',


    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'required' => 'الحقل مطلوب',
        'exists' => 'الحقل غير موجود'
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap our attribute placeholder
    | with something more reader friendly such as "E-Mail Address" instead
    | of "email". This simply helps us make our message more expressive.
    |
    */

    'attributes' => [
        'name' => 'الاسم',
        'username' => 'اسم المُستخدم',
        'email' => 'البريد الالكتروني',
        'first_name' => 'الاسم الأول',
        'last_name' => 'اسم العائلة',
        'password' => 'كلمة السر',
        'password_confirmation' => 'تأكيد كلمة السر',
        'city' => 'المدينة',
        'country' => 'الدولة',
        'address' => 'عنوان السكن',
        'phone' => 'الهاتف',
        'mobile' => 'الجوال',
        'age' => 'العمر',
        'sex' => 'الجنس',
        'gender' => 'النوع',
        'day' => 'اليوم',
        'month' => 'الشهر',
        'year' => 'السنة',
        'hour' => 'ساعة',
        'minute' => 'دقيقة',
        'second' => 'ثانية',
        'title' => 'العنوان',
        'description' => 'الوصف',
        'date' => 'التاريخ',
        'time' => 'الوقت',
        'available' => 'مُتاح',
        'size' => 'الحجم',

        'value_char' => 'القيمة بالحروف',
        'value_no' => 'القيمة بالأرقام',
        'start_date' => 'تاريخ البداية',
        'end_date' => 'تاريخ النهاية',
        'profit_type' => 'نوع الربح',
        'profit_value' => 'قيمة الربح',
        'total_amount' => 'المبلغ الإجمالي',
        'reason_id' => 'رقم العملية',
        'items.*.quantity' => 'كمية العنصر',
        'items.*.item_id' => 'العنصر',
        'items.*.unit' => 'وحدة العنصر',
        'items.*.unit_id' => 'وحدة العنصر',
        'items' => 'العناصر',
        'no_month' => 'عدد الأشهر',
        'status' => 'الحالة',
        'parent_id.id' => 'الأب',
        'nature_typ_id.id' => 'طبيعة الحساب',
        'final_account_id.id' => 'نوع الحساب',
        'notes' => 'ملاحظات',
        'type.id' => 'النوع',
        'size.id' => 'الحجم',
        'city.id' => 'المدينة',
        'inventory_no' => 'عدد المخازن',
        'employee_no' => 'عدد الموظفين',
        'country_id' => 'الدولة',
        'key' => 'المحدد',
        'name.*' => 'الإسم',
        'value.*' => 'القيمة',
        'group.id' => 'المجموعة',
        'nationality.*' => 'الجنسية',
        'nationality.id' => 'الجنسية',
        'purchase_representative' => 'المندوب',
        'currencies' => 'العملات',
        'categories' => 'التصنيفات',
        'start_work_date' => 'تاريخ بداية العمل',
        'gender_id' => 'الجنس',
        "telephone" => "رقم الهاتف",
        'address_1.*' => 'العنوان',
        'tax_no' => 'رقم الضريبة',
        'balance' => 'الرصيد',
        'account_chart.id' => 'البند المحاسبي',
        'postal_code' => 'الرمز البريدي',
        'mobile_prefix' => 'مقدمة الهاتف',
        'currency_id' => 'العملة',
        'language_id' => 'اللغة',
        'abbreviation' => 'الإختصار',
        'parent.id' => 'الأب',
        'value_type.id' => 'نوع القيمة',
        'value' => 'القيمة',
        'method_type_id' => 'نوع طريقة الدفع',
        'city_id' => 'المدينة',
        'country_id.id' => 'الدولة',
        'country.id' => 'الدولة',
        'city_id.id' => 'المدينة',
        'branch_id.id' => 'الفرع',
        'target.id' => 'المستخدم',
        'group_id.id' => 'المجموعة',
        'company_name' => 'إسم الشركة',
        'company_website' => 'الموقع الإلكتروني',
        'bank_id.id' => 'البنك',
        'method_type' => 'طريقة الدفع',
      

    ],

];
