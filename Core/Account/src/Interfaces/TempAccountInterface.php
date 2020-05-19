<?php


namespace Core\Account\Interfaces;


interface TempAccountInterface extends AccountInterface
{

    /**
     * get temp account by company's id
     *
     * @param $companyId
     * @return mixed
     * @author Amr
     */
    public function getByCompanyId($companyId);

    /**
     * this function is used to send email or sms,
     * according the type user sends
     *
     * @param $id
     * @param $type
     * @return mixed
     * @author Amr
     */
    public function send($id, $type);
}