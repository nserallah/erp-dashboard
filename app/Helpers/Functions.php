<?php

/**
 * Created by PhpStorm.
 * User: WeSSaM
 * Date: 30/10/2019
 * Time: 10:59 AM
 */

function supportedLanguages()
{
    return config('languages.supportedLanguages');
}

/**
 * @return array
 */
function locales()
{
    return array_keys(config('languages.supportedLanguages'));
}


/**
 * @param $attribute
 * @param string $locale
 * @return string
 */
function attributesByLocale($attribute, $locale = 'en')
{
    $attributes = [];
    foreach (locales() as $i => $currentLocale) {
        if ($locale != $currentLocale)
            $attributes[$i] = $attribute . '.' . $currentLocale;
    }
    return implode(",", $attributes);
}


/**
 * @param $timestamp
 * @return string
 */
function get_date_from_timestamp($timestamp)
{
    return \Carbon\Carbon::parse($timestamp)->format('Y-m-d');
}


/**
 * @param $attachment
 * @param $extension
 * @return mixed
 */
function get_original_filename($attachment, $extension)
{
    return str_replace('.' . $extension, '', $attachment->getClientOriginalName());
}


/**
 * @param $paginator
 * @param $resource
 * @return mixed
 */
function resourcePaginator($paginator, $resource)
{
    $collection = $resource::collection($paginator->getCollection());
    $paginator->setCollection($collection->collection);
    return $paginator;
}

/**
 * @param $image
 * @return \Illuminate\Contracts\Routing\UrlGenerator|string
 */
function imageUrl($image)
{
    return url('image/' . $image);
}


/**
 * @param string $path
 * @return string
 */
function db_migrations_path($path = '')
{
    return database_path('\migrations\\' . $path);
}


/**
 * @return string
 */
function db_multi_tenant_path()
{
    return db_migrations_path('\multi_tenant');
}


/**
 * @param $migration
 * @return string|string[]|null
 */
function get_table_from_migration($migration)
{
    return preg_replace('/(.*)create_(.*)_table(.*)/sm', '\2', $migration->migration);
}


/**
 * @param array $array
 * @return array
 */
function custom_array_map($array = [])
{
    return array_map(function ($object) {
        if ($object['id'])
            return $object['id'];

        return $object;
    }, $array);
}


/**
 * @param $s
 * @return bool
 */
function is_base64($s)
{
    return (bool)preg_match('/^[a-zA-Z0-9\/\r\n+]*={0,2}$/', $s);
}


/**
 * @param $attachment
 * @return \Illuminate\Contracts\Routing\UrlGenerator|string
 */
function file_url($attachment)
{
    return isset($attachment) && !empty($attachment) ? url('file/' . $attachment) : '';
}

function parse_to_carbon($timestamp)
{
    return $timestamp ? \Carbon\Carbon::parse($timestamp) : null;
}


function prepare_error_attrs_keys($errors)
{
    $new = [];
    foreach ($errors->getMessages() as $key => $error) {
        $new[(strpos($key, '.') !== false) ? explode('.', $key)[0] : $key] = $error;
    }
    return $new;
}


/**
 * @author WeSSaM
 * @param $slug
 * @return string
 * @throws Exception
 */
function map_class($slug)
{
    switch ($slug) {
        case 'address' :
            return \Core\Company\Models\Address::class;
        case 'general_address' :
            return \Core\Company\Models\GeneralAddress::class;
//        default :
//            throw new Exception(trans('lang.unknown_class_name'), RESOURCE_NOT_FOUND);
    }
}