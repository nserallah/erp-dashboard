<?php
/**
 * this is the key that identifies
 * the nationalities in the constants table
 *
 * @author Amr
 */
define('NATIONALITY_CONSTANT', 'NATIONALITY');
/**
 * this is the key of error
 * response
 *
 * @author Amr
 */
define('ERROR_RESPONSE', 'error');
/**
 * this is the key of success
 * response
 *
 * @author Amr
 */
define('SUCCESS_RESPONSE', 200);
/**
 * Http success status
 *
 * @author Amr
 */
define('SUCCESS_STATUS', 200);
/**
 * Super Admin Guard
 *
 * @author Amr
 */
define('SUPER_ADMIN_GUARD', 'api');
/**
 * Company Admin Guard
 *
 * @author Amr
 */
define('ADMIN_GUARD', 'admin-api');
/**
 * Company User Guard
 *
 * @author Amr
 */
define('USER_GUARD', 'user-api');
/**
 * this is the default connection
 * applications uses
 *
 * @author Amr
 */
define('DEFAULT_CONNECTION', 'mysql');
/**
 * database name's prefix
 *
 * @author Amr
 */
define('DATABASE_NAME_PREFIX', 'unified_');
/**
 * database connection's prefix
 *
 * @author Amr
 */
define('DATABASE_CONNECTION_PREFIX', 'unified_connection_');
/**
 * database user's prefix
 *
 * @author Amr
 */
define('DATABASE_USER_PREFIX', 'unified_user_');
/**
 * database password's prefix
 *
 * @author Amr
 */
define('DATABASE_PASSWORD_PREFIX', 'unified_password_*#)!_');
/**
 * LOG TRANSACTION : LOGIN TYPE
 *
 * @author Amr
 */
define('LOGIN_TRANSACTION', 1);
/**
 * LOG TRANSACTION : LOGOUT TYPE
 *
 * @author Amr
 */
define('LOGOUT_TRANSACTION', 2);
/**
 * ACTIVATION CODE TYPE
 *
 * @author Amr
 */
define('ACTIVATION_CODE', 'ACTIVATION_CODE');
/**
 * INACTIVE status
 *
 * @author Amr
 */
define('INACTIVE', 0);
/**
 * ACTIVE status
 *
 * @author Amr
 */
define('ACTIVE', 1);
/**
 * IS_TRIAL
 *
 * @author Amr
 */
define('IS_TRIAL', 1);

/**
 * MODULES Attribute
 *
 * @author Wessam
 */
define('MODULES', 'modules');

/**
 * MODULES Attribute
 *
 * @author Wessam
 */
define('INTERVALS', 'intervals');

/**
 * SUCCESS STATUS
 *
 * @author Wessam
 */
define('SUCCESS', 1);

/**
 * ERROR STATUS
 *
 * @author Wessam
 */
define('ERROR', 0);
/**
 * this is the duration of access code
 *
 * @author Wessam
 */
define('ACCESS_CODE_DURATION', 7);


/**
 * key for payment type
 *
 * @author Wessam
 */
define('NEW_ACCOUNT', 'NEW_ACCOUNT');

/**
 * key for payment type
 *
 * @author Wessam
 */
define('CONVERSION', 'CONVERSION');


/**
 * key for payment type
 *
 * @author Wessam
 */
define('RENEWAL', 'RENEWAL');

/**
 * key for payment type
 *
 * @author Wessam
 */
define('UPGRADE', 'UPGRADE');

/**
 * FINAL_ACCOUNT_TYPE used for Account settings
 *
 * @author Amr
 */
define('FINAL_ACCOUNT_TYPE', 'FINAL_ACCOUNT_TYPE');
/**
 * CHART_TYPE used for Account settings
 *
 * @author Amr
 */
define('CHART_TYPE', 'CHART_TYPE');

/**
 * ACCOUNT_NATURE used for Account settings
 *
 * @author Amr
 */
define('ACCOUNT_NATURE', 'ACCOUNT_NATURE');

/**
 * account's config's status option
 *
 * @author Amr
 */
define('OPENED', 1);
/**
 * account's config's status option
 *
 * @author Amr
 */
define('CLOSED', 0);

/**
 * default number of pagination
 *
 * @author Amr
 */
define('DEFAULT_PAGINATION', 10);
/**
 * ACCOUNT NATURE TYPE  : Debit
 *
 * @author Amr
 */
define('DEBIT', 1);
/**
 * ACCOUNT NATURE TYPE  : Credit
 *
 * @author Amr
 */
define('CREDIT', 2);
/**
 * FINAL ACCOUNT TYPE  : Budget
 *
 * @author Amr
 */
define('BUDGET', 1);
/**
 * FINAL ACCOUNT TYPE  : Profits and losses
 *
 * @author Amr
 */
define('PROFITS_AND_LOSSES', 2);
/**
 * FINAL ACCOUNT TYPE  : Trading account
 *
 * @author Amr
 */
define('TRADING_ACCOUNT', 3);
/**
 * CHART TYPE : Standard
 *
 * @author Amr
 */
define('CHART_TYPE_STANDARD', 1);
/**
 * CHART TYPE : Basic
 *
 * @author Amr
 */
define('CHART_TYPE_BASIC', 2);
/**
 * CHART TYPE : CUSTOM
 *
 * @author Amr
 */
define('CHART_TYPE_CUSTOM', 3);
/**
 * Money safe transaction's In progress
 * status
 *
 * @author Amr
 */
define('TRANSACTION_IN_PROGRESS', 111);
/**
 * Money safe transaction's In delivered
 * status
 *
 * @author Amr
 */
define('TRANSACTION_DELIVERED', 112);
/**
 * Money safe transaction's In canceled
 * status
 *
 * @author Amr
 */
define('TRANSACTION_CANCELED', 113);
/**
 * MONEY_SAFE_TRANSFER key
 *
 * @author Amr
 */
define('MONEY_SAFE_TRANSFER', 'MONEY_SAFE_TRANSFER');
/**
 * BANK_TRANSFER_TYPE key
 *
 * @author Amr
 */
define('BANK_TRANSFER_TYPE', 'BANK_TRANSFER_TYPE');
/**
 * BANK_TRANSFER_TYPE  USER TYPE
 *
 * @author Amr
 */
define('BANK_TRANSFER_TYPE_USER', 211);

/**
 * BANK_TRANSFER_TYPE  COMPANY TYPE
 *
 * @author Amr
 */
define('BANK_TRANSFER_TYPE_COMPANY', 212);

/**
 * SAVE_TRANSACTION_STORE_OPERATION
 *
 * @author Amr
 */
define('SAVE_TRANSACTION_STORE_OPERATION', 1);

/**
 * SAVE_TRANSACTION_UPDATE_OPERATION
 *
 * @author Amr
 */
define('SAVE_TRANSACTION_UPDATE_OPERATION', 2);

/**
 * EDITING_TIME_IS_OVER
 *
 * @author Amr
 */
define('EDITING_TIME_IS_OVER', 3);
/**
 * CANCELED_TRANSACTION
 *
 * @author Amr
 */
define('CANCELED_TRANSACTION', 0);
/**
 * TRANSFER_BANK_TYPE FOR SAVE TRANSACTION
 *
 * @author Amr
 */
define('TRANSFER_BANK_TYPE', 0);
/**
 * TRANSFER_SAVE_TYPE FOR SAVE TRANSACTION
 *
 * @author Amr
 */
define('TRANSFER_SAVE_TYPE', 1);

/**
 * INSTALLMENT_STATUS
 *
 */
define('INSTALLMENT_STATUS', 'INSTALLMENT_STATUS');

/**
 * SALE_ORDER_STATUS for sale order
 *
 * @author Amr
 */
define('SALE_ORDER_STATUS', 'SALE_ORDER_STATUS');


/**
 * SHIPPING_TYPE for sale order
 *
 * @author Amr
 */
define('SHIPPING_TYPE', 'SHIPPING_TYPE');
/**
 * SHIPPING_TARGET for shipping
 *
 * @author Amr
 */
define('SHIPPING_TARGET', 'SHIPPING_TARGET');
/**
 * SHIPPING_WAY for shipping
 *
 * @author Amr
 */
define('SHIPPING_WAY', 'SHIPPING_WAY');

/**
 * BOND_OPERATION for installment
 *
 * @author Amr
 */
define('BOND_OPERATION', 'BOND_OPERATION');

/**
 * DISCOUNT_TYPE for discount type
 *
 * @author Amr
 */
define('DISCOUNT_TYPE', 'DISCOUNT_TYPE');

/**
 * CONTRACTUAL_DISCOUNT for contractual discount
 *
 * @author Amr
 */
define('CONTRACTUAL_DISCOUNT', 301);

/**
 * FREE_SHIPPING for FREE SHIPPING
 *
 * @author Amr
 */
define('FREE_SHIPPING', 302);


/**
 * ORDER_OWNER_TYPE for FREE SHIPPING
 *
 * @author Amr
 */
define('ORDER_OWNER_TYPE', 'ORDER_OWNER_TYPE');


/**
 * DEPARTMENT
 *
 * @author Amr
 */
define('DEPARTMENT', 'DEPARTMENT');


/**
 * DELEGATE
 *
 * @author Amr
 */
define('DELEGATE', 'DELEGATE');


/**
 * PURCHASE_ORDER_STATUS
 *
 * @author WeSSaM
 */
define('PURCHASE_ORDER_STATUS', 'PURCHASE_ORDER_STATUS');
/**
 * max char. numbers line holds
 *
 * @author Amr
 */
define('PDF_STRING_MAX_LENGTH', 6);
/**
 * string delimiter
 *
 * @author Amr
 */
define('PDF_STRING_DELIMITER', " ");
/**
 * custom address's type
 *
 * @author Amr
 */
define('CUSTOM_ADDRESS_TYPE', 1);
/**
 * general address's type
 *
 * @author Amr
 */
define('GENERAL_ADDRESS_TYPE', 2);

