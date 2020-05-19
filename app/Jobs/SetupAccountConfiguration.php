<?php

namespace App\Jobs;

use App\Company;
use App\Exceptions\DatabaseCreationException;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\DB;

class SetupAccountConfiguration implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    private $company;

    public function __construct(Company $company)
    {
        $this->company = $company;
    }

    /**
     * Execute the job.
     *
     * @return void
     * @throws DatabaseCreationException
     * @throws \App\Exceptions\MigrationException
     * @throws \App\Exceptions\UnknownDatabaseException
     */
    public function handle()
    {
        if (isset($this->company->account)) {
            $account = $this->company->account;
            $databaseManager = \App\Database\DatabaseManager::getInstance();
            $account['db_name'] = (str_replace(' ', '_', $this->company->brief_name));
            $databaseManager->setDatabase($account['db_name']);
            $account['db_user'] = $databaseManager->getUser();
            $account['db_password'] = $databaseManager->getPassword();
            $account['db_connection'] = $databaseManager->getConnection();
            $result = $databaseManager->createDatabase();
            if (!$result)
                throw new DatabaseCreationException(trans("Account::lang.create_database_error"), CREATE_DATABASE_ERROR);
            $databaseManager->setUpConnectionConfiguration();
            $databaseManager->newMigrate($this->company->plan);

            if (isset($this->company->tempAccount))
                $this->company->tempAccount->createAdmin();

            $databaseManager->getDefaultConnection();
            DB::setDefaultConnection('mysql');
            $account->fill($account->toArray());
            $account->update();

//            var_dump($account);
//            if (isset($this->company->tempAccount))
//                $this->company->tempAccount->delete();
        }
        $this->processQueue();
    }

    public function processQueue()
    {
        dispatch(($this))->delay(20);
    }

}
