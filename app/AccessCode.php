<?php

namespace App;

use App\Exceptions\InvalidAccessCodeException;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Http\Request;
use phpDocumentor\Reflection\Types\Self_;
use App\Company;

class AccessCode extends BaseModel
{
    use SoftDeletes;

    /**
     * model table
     *
     * @author Amr
     * @var string
     */
    protected $table = "access_code";
    /**
     * model columns
     *
     * @author Amr
     * @var array
     */
    protected $fillable = ['code', 'type', 'expires', 'accessable', 'accessable_id'];

    /**
     * generate access code
     * if access code is existed, re-call function again 'til
     * you get a unique access code
     *
     * @return int
     * @author Amr
     */
    static function generate()
    {
        $code = generate_access_code();
        $duplication = self::where(['code' => $code])->count();
        if ($duplication == 0)
            return $code;
        return self::generate();
    }

    /**
     * check if the given access code is correct
     *
     * @param $code
     * @return AccessCode
     * @author Amr
     */
    static function checkAccessCode($code, $model)
    {
        $code = $model->accessCode()->where('code', $code)->where('expires', '>', Carbon::now())->first();
        if (!$code)
            throw new InvalidAccessCodeException(trans('Account::lang.invalid_access_code'), INVALID_ACCESS_CODE);
        return $code;
    }

    /**
     * morph relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\MorphTo
     * @author Amr
     */
    public function accessable()
    {
        return $this->morphTo();
    }


}
