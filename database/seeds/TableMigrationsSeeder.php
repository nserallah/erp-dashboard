<?php

use Illuminate\Database\Seeder;

class TableMigrationsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->syncMigrations(db_migrations_path(), 'multi_tenant');
    }


    /**
     * @param $path
     * @return array
     */
    public function getDirectoryContent($path)
    {
        return array_diff(scandir($path), ['.', '..']);
    }


    /**
     * @param $path
     * @return array
     */
    public function getMigrationFiles($path)
    {
        $array = $this->getDirectoryContent($path);
        return array_filter($array, function ($file) {
            return !empty($file) && preg_match("/.php/i", $file);
        });
    }


    /**
     * @param $path
     * @return array
     */
    public function getMigrationFolders($path)
    {
        $array = $this->getDirectoryContent($path);
        return array_filter($array, function ($file) {
            return !empty($file) && !preg_match("/.php/i", $file);
        });
    }

    /**
     * @param $path
     * @param $folder
     */
    private function syncMigrations($path, $folder)
    {
        $base_path = $path . '\\' . $folder;
        $files = $this->getMigrationFiles($base_path); // get files from directory
        $folders = $this->getMigrationFolders($base_path);
        foreach ($folders as $innerFolder) {
            $this->syncMigrations($base_path, $innerFolder);
        }
        if (is_array($files)) {
            foreach ($files as $file) {
                \App\TableMigration::create([
                    'migration' => $file,
                    'path' => str_replace(db_migrations_path('\\'),'',$base_path),
                    'type' => $folder,
                    'ordered_at' => @$this->getTimestampFromName($file)
                ]);
            }
        }
    }

    /**
     * @param $file
     * @return string
     */
    private function getTimestampFromName($file)
    {
        $timestamp = str_split($file, 17)[0];
        $timestamp_array = explode('_', $timestamp);;
        return Carbon\Carbon::create($timestamp_array[0], $timestamp_array[1], $timestamp_array[2])->format("Y-m-d") . ' ' . gmdate("H:i:s", (int)$timestamp_array[3]);
    }
}
