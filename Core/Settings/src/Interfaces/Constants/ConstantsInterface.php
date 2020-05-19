<?php

namespace Core\Settings\Interfaces\Constants;

use Core\Settings\Interfaces\SettingsInterface;
use Illuminate\Http\Request;

interface ConstantsInterface extends SettingsInterface
{
    /**
     * update the status of resource from active
     * to inactive and vis versa
     *
     * @param Request $request
     * @param $id
     * @return mixed
     * @author Amr
     */
    function changeActiveStatus(Request $request, $id);

    /**
     * @param $id
     * @param null $attribute
     * @return mixed
     */
    function getAttributeFromValue($id, $attribute = null);
}