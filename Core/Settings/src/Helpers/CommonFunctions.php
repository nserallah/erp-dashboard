<?php

if (!function_exists('constants')) {
    function constants()
    {
        return $instance = app()->make(\Core\Settings\Interfaces\Constants\ConstantsInterface::class);
    }
}