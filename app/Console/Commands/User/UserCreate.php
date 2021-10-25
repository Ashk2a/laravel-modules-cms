<?php

namespace App\Console\Commands\User;

use App\Abstractions\Console\Commands\BaseCommand;
use App\Contracts\Services\User\UserRegisterService;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

class UserCreate extends BaseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'user:create {--username=} {--nickname=} {--email=} {--password=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create an user in database';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle(UserRegisterService $userRegisterService): int
    {
        $rules = (new RegisterRequest())->rules();
        $rules = collect($rules)->except(['password_confirmation'])->all();

        $expected = ['username', 'nickname', 'email', 'password'];
        $data = [];

        foreach ($expected as $option) {
            $data[$option] = $this->option($option);
        }

        $validator = Validator::make($data, $rules);

        if ($validator->fails()) {
            $this->error(trans('console.invalid_data_input'));
            $this->line($validator->errors()->toJson(self::JSON_BEAUTIFY));
            return self::FAILURE;
        }

        $user = $userRegisterService->register(
            $data['username'],
            $data['nickname'],
            $data['email'],
            $data['password']
        );

        if (null === $user) {
            $this->error(trans('console.user.creation_failed'));
            return self::FAILURE;
        }

        $this->line($user->toJson(self::JSON_BEAUTIFY));

        return self::SUCCESS;
    }
}
