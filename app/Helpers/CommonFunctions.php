<?php
/**
 * This function is used to change
 * database default configuration ( connection )
 *
 * @param $databaseName
 * @author Amr
 */

use App\Company;
use App\Exceptions\DatabaseCreationException;
use Core\Auth\Models\Admin;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;

if (!function_exists('change_database_config')) {
    function change_database_config($databaseName)
    {
        $databaseManager = \App\Database\DatabaseManager::getInstance($databaseName);                                   // create new instance from DatabaseManager @author Amr
        $databaseManager->setUpConnectionConfiguration();                                                               // change the default configurations @author Amr
    }
}
/**
 * this function is used to check whether database
 * existed or not
 *
 * @author Amr
 */
if (!function_exists("is_database_existed")) {
    function is_database_existed($databaseName)
    {
        $databaseManager = \App\Database\DatabaseManager::getInstance();                                   // create new instance from DatabaseManager @author Amr
        $databaseManager->setDatabase($databaseName);
        return $databaseManager->isDatabaseExisted();                                                                   // check if database existed @author Amr
    }
}
/**
 * this function is used to return the database
 * user has
 * @note: it takes the database from the header
 *
 * @author Amr
 */
if (!function_exists('database')) {
    function database()
    {
        return request()->header('company');
    }
}
/**
 *  this function is used to get the default connection
 *
 * @author Amr
 */
if (!function_exists('database_connection')) {
    function database_connection()
    {
        $databaseManager = \App\Database\DatabaseManager::getInstance();
        return $databaseManager->establishConnection();
    }
}
/**
 *  this function returns the authenticated
 *  user
 *
 * @author Amr
 */
if (!function_exists('auth_user')) {
    function auth_user()
    {
        $guard = 'api';
        if (auth($guard)->check())
            return auth($guard)->user();
        else if (auth(ADMIN_GUARD)->check())
            return auth(ADMIN_GUARD)->user();
        else if (auth(USER_GUARD)->check())
            return auth(USER_GUARD)->user();
    }
}


if (!function_exists('filter_request')) {
    /**
     * this function is used to filter the
     * request attributes and remove
     * attributes that make problem with database filters
     *
     * @param $request
     * @return mixed
     * @author Amr
     */
    function filter_request($request)
    {
        foreach (blocked_requests_filter() as $index => $value) {
            unset($request[$value]);
        }
        return $request;
    }
}

if (!function_exists('blocked_requests_filter')) {
    /**
     * the blocked name request values
     * @author Amr
     */
    function blocked_requests_filter()
    {
        return ['page', 'resource_path'];
    }
}

if (!function_exists("generate_access_code")) {
    /**
     * this function is used to generate
     * access code
     *
     * @return int
     * @author Amr
     */
    function generate_access_code()
    {
        return rand(10000, 99999);
    }
}

if (!function_exists("companies")) {
    /**
     * this function return new instance
     * from companies
     *
     *
     * @author Amr
     */
    function companies()
    {
        return app()->make(\Core\Account\Interfaces\CompanyInterface::class);
    }
}


if (!function_exists('account')) {
    /**
     * this function return new instance
     * from account
     *
     * @return mixed
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     * @author Amr
     */
    function account()
    {
        return app()->make(\Core\Account\Interfaces\AccountInterface::class);
    }
}

if (!function_exists('create_database')) {
    function create_database($companyBriefName, $admin)
    {
        $databaseManager = \App\Database\DatabaseManager::getInstance();
        $account['db_name'] = (str_replace(' ', '_', $companyBriefName));
        $databaseManager->setDatabase($account['db_name']);
        $account['db_user'] = $databaseManager->getUser();
        $account['db_password'] = $databaseManager->getPassword();
        $account['db_connection'] = $databaseManager->getConnection();
        $result = $databaseManager->createDatabase();
        if (!$result)
            throw new DatabaseCreationException(trans("Account::lang.create_database_error"), CREATE_DATABASE_ERROR);
        $databaseManager->setUpConnectionConfiguration();
        $databaseManager->migrate();
        $databaseManager->seed();
        Admin::create($admin);
        $databaseManager->getDefaultConnection();
        return $account;
    }
}

if (!function_exists('new_create_database')) {
    function new_create_database($companyBriefName, $admin, $plan)
    {
        $databaseManager = \App\Database\DatabaseManager::getInstance();
        $account['db_name'] = (str_replace(' ', '_', $companyBriefName));
        $databaseManager->setDatabase($account['db_name']);
        $account['db_user'] = $databaseManager->getUser();
        $account['db_password'] = $databaseManager->getPassword();
        $account['db_connection'] = $databaseManager->getConnection();
        $result = $databaseManager->createDatabase();
        if (!$result)
            throw new DatabaseCreationException(trans("Account::lang.create_database_error"), CREATE_DATABASE_ERROR);
        $databaseManager->setUpConnectionConfiguration();
        $databaseManager->newMigrate($plan);
        Admin::create($admin);
        $databaseManager->getDefaultConnection();
        return $account;
    }
}


if (!function_exists('load_resource_pagination')) {
    /**
     * this function is used to build new pagination structure
     * to simplify the processing of response in the front end
     *
     * new structure
     * response [
     *      data => [],
     *      paginator => {}
     * ]
     *
     * @param $resourceClass
     * @param \Illuminate\Pagination\LengthAwarePaginator $paginator
     * @return mixed
     * @author Amr
     */
    function load_resource_pagination($resourceClass = null, \Illuminate\Pagination\LengthAwarePaginator $paginator)
    {
        $data = $paginator->getCollection();
        $class = get_model($data);
        if (is_null($class)) {
            $class = request()['resource_path'];
        }
        if ($resourceClass != null) {
            $data = $resourceClass::collection($paginator->getCollection());
        }
        $result['data'] = $data;
        $temp = $paginator->toArray();
        unset($temp['data']);
        $result['paginator'] = $temp;
        $result['columns'] = [];
//        dd($class);
        try {
            if (isset($class::$columns)) {
                $result['columns'] = $class::$columns;
            }
        } catch (Exception $exception) {
            return $result['columns'] = [];
        }
        if (isset($class::$filters)) {
            $result['filters'] = $class::$filters;
        }
        if (isset($class::$actions)) {
            $result['actions'] = $class::$actions;
        }
        if ($class) {
            if (get_resource_name($class) == 'bankaccount')
                $result['resource'] = get_resource_name($class) . '_' . request()->route('type');
            else
                $result['resource'] = get_resource_name($class);
        }
        return $result;
    }
}

if (!function_exists('is_json')) {
    /**
     * this function is used to check whether the
     * came string is json
     * if so, return the decode of it
     * otherwise return false
     *
     * @param $content
     * @return bool|mixed
     * @author Amr
     */
    function is_json($content)
    {
        $data = json_decode($content);
        return (json_last_error() == JSON_ERROR_NONE) ? $data : FALSE;

    }
}

if (!function_exists('json_attributes')) {
    /**
     * this function is used to get the
     * data of json object then return it
     * as list
     *
     *
     * @param $json
     * @return bool|mixed|string|null
     * @author Amr
     */
    function json_attributes($json)
    {
        if (!$parsedJson = is_json($json))
            return null;

        try {
            return implode(',', (array)$parsedJson);
        } catch (Exception $exception) {
            return $parsedJson;
        }
    }
}

if (!function_exists('get_model')) {
    /**
     * this function is used to return the model
     * of object we use here
     * if we used resource class, function will call itself until get
     * the leaf node that have instance from \Illuminate\Database\Eloquent\Model class
     *
     * @author Amr
     */
    function get_model($model)
    {
        $firstObject = $model->first();
        if ($firstObject instanceof JsonResource) {
            return get_model($firstObject);
        }
        if ($firstObject instanceof \Illuminate\Database\Eloquent\Model)
            return get_class($firstObject);
    }

}
if (!function_exists('get_resource_name')) {
    /**
     * this function returns the name of resource which
     * is the name of object's class
     * all resource name will be returned in lower case¬
     *
     * @author Amr
     */
    function get_resource_name($classPath)
    {
        $pathPartials = explode('\\', $classPath);
        return strtolower(end($pathPartials));
    }

}
if (!function_exists('parse_filters')) {
    /**
     * this function parses the filters came as Base64 encoding
     * form the front end
     *
     * @param String $filter
     * @return \Illuminate\Support\Collection
     * @throws Exception
     */
    function parse_filters($filter)
    {
        return app()->makeWith(\App\Filters\Filter::class, $filter)->parseFilters($filter);
    }
}

if (!function_exists('array_to_collection')) {
    /**
     * this function converts array to collection
     *
     * @param $filters
     * @return \Illuminate\Support\Collection
     * @author Amr
     */
    function filters_to_collection($filters)
    {
        return collect($filters);
    }
}

if (!function_exists('sanitize_filters')) {
    /**
     * this function removes the empty filters
     * which they may null or empty string
     *
     * @param $filters
     * @return  \Illuminate\Support\Collection
     * @author Amr
     */
    function sanitize_filters($filters)
    {
        $collection = filters_to_collection($filters);
        $notEmptyCollection = $collection->filter(function ($item) {
            return $item['value'] != null || trim($item['value']) != '';
        });
        return $notEmptyCollection;
    }
}

if (!function_exists('query_template')) {
    /**
     * this function contains all query templates
     *
     * @return array
     * @author Amr
     */
    function query_template()
    {
        return [
            'like' => '%{value}%',
            '=' => '{value}',
            '!=' => '{value}',
            '<>' => '{value}',
            '<' => '{value}',
            '>' => '{value}',
            '<=' => '{value}',
            '>=' => '{value}',
        ];
    }
}

if (!function_exists('build_template')) {
    /**
     * gets back the template of
     * operand
     *
     * @param $operand
     * @param $value
     * @return mixed
     * @throws Exception
     * @author Amr
     */
    function build_template($operand, $value)
    {
        try {
            $templateConstant = '{value}';
            $template = query_template()[$operand];
            return str_replace($templateConstant, $value, $template);
        } catch (Exception $exception) {
            throw new \Exception('invalid operand');
        }
    }
}


if (!function_exists('build_query')) {
    /**
     * this function is used to build the query of
     * filters
     *
     * @param \Illuminate\Support\Collection $filters
     * @return array
     * @author Amr
     */
    function build_query(\Illuminate\Support\Collection $filters)
    {
        $query = '';
        $values = [];
        $delimiter = ' and ';
        $relations = [];
//        dd($filters->all());
        $filters->each(function ($item) use (&$query, &$values, $delimiter, &$relations) {
//            $joinResult = join_relations($item);
            if (isset($item['relation'])) {
                $relations = relation_query($relations, $item, $delimiter);
                return;
//                $relationQuery = prepare_query($item['relation']['field'], $item['operand'], $delimiter);
////                "`{$item['relation']['field']}` {$item['operand']} ? $delimiter";
//                $relations[$item['relation']['name']] = [
//                    'query' => $relationQuery,
//                    'values' => [$item['value']]
//                ];
//                return;
            }
            $localQuery = prepare_query($item['filter_name'], $item['operand'], $delimiter); //"`{$item['filter_name']}` {$item['operand']} ? $delimiter";
//            echo '$joinResult : ' . $joinResult;
//            echo '<br/>';
//            echo '$localQuery : ' . $localQuery;
//            if ($joinResult)
//                $query .= $joinResult;
//            else
//                $query .= $localQuery;
//            $query .= $joinResult . ' and ' . $localQuery;
            $query .= $localQuery;
            $query = rtrim($query, $delimiter);
            array_push($values, build_template($item['operand'], $item['value']));
            return $item;
        });
//        dd(['query' => $query, 'values' => $values, 'relations' => $relations]);

        return ['query' => $query, 'values' => $values, 'relations' => $relations];
    }
}

if (!function_exists('relation_query')) {
    function relation_query($relations, $item, $delimiter)
    {
        if (!isset($item['relation'])) {
            return $relations;
        }
        $relationQuery = '';
        $values = [];
        if (isset($relations[$item['relation']['name']])) {
            $relationQuery = $relations[$item['relation']['query']] ?? '';
        }
        if (isset($relations[$item['relation']['name']])) {
            $values = $relations[$item['relation']['values']] ?? [];
        }
        $relationQuery .= prepare_query($item['relation']['field'], $item['operand'], $delimiter);
        array_push($values, build_template($item['operand'], $item['value']));
//                "`{$item['relation']['field']}` {$item['operand']} ? $delimiter";
        $relations[$item['relation']['name']] = [
            'query' => $relationQuery,
            'values' => $values
        ];
        return $relations;
    }
}

//if (!function_exists('generateQuery')) {
//
//    function generateQuery($relationQuery): string
//    {
//        prepare_query($item['relation']['field'], $item['operand'], $delimiter);
//    }
//
//}


if (!function_exists('prepare_query')) {
    function prepare_query($field, $operand, $delimiter)
    {
        $query = "`{$field}` {$operand} ? $delimiter";
        $query = rtrim($query, $delimiter);
        return $query;
    }
}

if (!function_exists('join_relations')) {

    function join_relations($item, $delimiter = 'and')
    {
        if (!isset($item['join']))
            return null;


//        $tableFrom = (new $item['join']['model_from']())->getTable();
//        $tableTo = (new $item['join']['model_to']())->getTable();
//        $fieldFrom = $item['join']['field_from'];
//        $fieldTo = $item['join']['field_to'];
////        dd($item);
////        if (!isset($item['join']))
//        $query = "`$tableTo`.`{$item['filter_name']}` {$item['operand']} ? $delimiter";
//        $joinQuery = ";(
//             where EXISTS (select * from  `$tableFrom`  JOIN `$tableTo`
//              ON `{$tableTo}`.`{$fieldTo}` = `{$tableFrom}`.`{$fieldFrom}` where " . $query;
//        $joinQuery = rtrim($joinQuery, $delimiter);
//        $joinQuery = $joinQuery . ' )';
//        return $joinQuery;
//        dd($joinQuery);
//        dd($joinQuery);
        //" WHERE {$tableTo}.name LIKE 'branch 1') and name like \"%fa%\"";
//        $modelFrom = new $item['join']['model_from']();
//        $modelTo = new $item['join']['model_to']();
//        $modelKeyFrom = $item['join']['model_key_from'];
//        $modelKeyTo = $item['join']['model_key_to'];

//        dd('item', $modelFrom, $modelTo);

    }

}
if (!function_exists('current_account')) {
    /**
     * get the current account
     * this function is used to get
     * the current account of sessioned admin
     *
     * @return mixed
     * @throws Exception
     * @author Amr
     */
    function current_account()
    {
        $companyBriefName = request()->header('company', null);
        if (!$companyBriefName)
            throw new Exception('Company is not supported');
        DB::setDefaultConnection('mysql');
        $company = Company::where('brief_name', 'like', '%' . $companyBriefName . '%')->first();
        if (!$company)
            throw new \Illuminate\Database\Eloquent\ModelNotFoundException();
        return $company->account;
    }


    /**
     * @param $prefix
     * @param $controller
     * @param $function
     */
    function crud_routes($prefix, $controller, $function = null)
    {
        $controller = class_basename($controller);
        Route::group(['prefix' => $prefix, 'as' => $prefix . '.'], function () use ($controller, $function) {
            Route::get('/get', ['as' => 'get', 'uses' => $controller . '@index']);
            Route::post('/create', ['as' => 'store', 'uses' => $controller . '@store']);
            Route::group(['prefix' => '{id}'], function () use ($controller) {
                Route::match(['put', 'post'], '/update', ['as' => 'update', 'uses' => $controller . '@update']);
                Route::delete('/delete', ['as' => 'delete', 'uses' => $controller . '@delete']);
                Route::patch('/active', ['as' => 'active', 'uses' => $controller . '@activate']);
                Route::get('/find', ['as' => 'find', 'uses' => $controller . '@find']);
            });
            if (isset($function))
                call_user_func($function);
        });
    }

}

if (!function_exists('account_item')) {
    /**
     * return the account repo.
     *
     * @return mixed
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     * @author Amr
     */
    function account_item()
    {
        return app()->make(\Core\Company\Repository\AccountItemRepository::class);
    }
}
if (!function_exists('account_item_code')) {
    /**
     * this function returns account item's code
     *
     * @param null $parentId
     * @return int
     * @throws Exception
     */
    function account_item_code($parentId = null)
    {
        $parentQuery = \Core\Company\Models\AccountItem::where('parent_id', $parentId)->where(request()->only('chart_id'));
        // if the account was the root parent
        if (!$parentId) {
            $parentsCount = $parentQuery->count();
            return $parentsCount + 1;
        }
        // get parent by using the passed parent_id
        $accountItemParent = \Core\Company\Models\AccountItem::where(['id' => $parentId])->where(request()->only('chart_id'))->first();
        // get the number of parent's children
        $accountItemParentChildren = $accountItemParent->children()->count();
        // generate the code of tree's item
        $code = $accountItemParentChildren + intval($accountItemParent->serial_from);
//        // get the code of parent concatenate with number of parent's children + 1
//        $code = intval("{$accountItemParent->code}" . $accountItemParentChildren + 1);
        return $code;
        // check if the code lies between parent's rang
//        if ($code >= $accountItemParent->serial_from && $code <= $accountItemParent->serial_to)
//
//        // if the code out of rang, throw an exception to cancel the process
//        throw new \Exception(trans('Company::lang.code_out_of_bound'));
    }
}
if (!function_exists('is_update_request')) {
    /**
     * check if request is an update request
     * or not
     *
     * @return mixed
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     * @author Amr
     */
    function is_update_request()
    {
        return in_array(strtolower(request()->getMethod()), ['put', 'patch']);
    }
}


if (!function_exists('sale_order')) {
    /**
     * new instance from the sale_order
     *
     * @return mixed
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     * @author Amr
     */
    function sale_order()
    {
        return app()->make(\SalesOrder\Http\Repositories\SaleRequestRepository::class);
    }
}


if (!function_exists('purchase_order')) {
    /**
     * new instance from the sale_order
     *
     * @return mixed
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    function purchase_order()
    {
        return app()->make(\PurchaseOrder\Http\Repositories\PurchaseRequestRepository::class);
    }
}

if (!function_exists('sale_quote')) {
    /**
     * new instance from the sale_quote
     *
     * @return mixed
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     * @author Amr
     */
    function sale_quote()
    {
        return app()->make(\SalesOrder\Http\Repositories\SaleQuoteRepository::class);
    }
}


if (!function_exists('shipping_purchase_quote')) {
    /**
     * new instance from the purchase_quote
     *
     * @return mixed
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     * @author WeSSaM
     */
    function shipping_purchase_quote()
    {
        return app()->make(\PurchaseOrder\Http\Repositories\ShippingRequestPurchaseRepository::class);
    }
}

if (!function_exists('purchase_quote')) {
    /**
     * new instance from the purchase_quote
     *
     * @return mixed
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     * @author WeSSaM
     */
    function purchase_quote()
    {
        return app()->make(\PurchaseOrder\Http\Repositories\PurchaseQuoteRepository::class);
    }
}


if (!function_exists('purchase_quote_request')) {
    /**
     * new instance from the purchase_quote_request
     *
     * @return mixed
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     * @author WeSSaM
     */
    function purchase_quote_request()
    {
        return app()->make(\PurchaseOrder\Http\Repositories\PurchaseQuoteRequestRepository::class);
    }
}

if (!function_exists('wrap_pdf_strings')) {
    function wrap_pdf_strings($string)
    {
        wordwrap($string, 8, " ", true);
    }
}

if (!function_exists('address_type_map')) {
    /**
     * map address's types
     *
     * @return mixed
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     * @author Amr
     */
    function address_type_map()
    {
        return [
            CUSTOM_ADDRESS_TYPE => \Core\Company\Models\Address::class,
            GENERAL_ADDRESS_TYPE => \Core\Company\Models\GeneralAddress::class
        ];
    }
}