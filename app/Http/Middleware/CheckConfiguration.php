<?php

namespace App\Http\Middleware;

use App\Models\Auth\Realmlist;
use App\Models\DBConnection;
use Closure;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class CheckConfiguration
{
    const ERROR_MESSAGES = [
        'database_connection' => 'Database connection with name `%s` is invalid.'
    ];

    /**
     * Check the global configuration to know if app can run or not.
     * @param Request $request
     * @param Closure $next
     * @return mixed
     * @throws Exception
     */
    public function handle(Request $request, Closure $next): mixed
    {
        $connections = Config::get('database.connections');

        foreach ($connections as $name => $definition) {
            try {
                DB::connection($name)->getPdo();
            } catch (Exception $exception) {
                $error = sprintf(self::ERROR_MESSAGES['database_connection'], $name);
                Log::error($error);

                if (false === App::isProduction()) {
                    throw $exception;
                }

                return response()->json($error);
            }
        }

        return $next($request);
    }
}
