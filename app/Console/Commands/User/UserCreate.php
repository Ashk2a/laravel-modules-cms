<?php

namespace App\Console\Commands\User;

use App\Abstractions\Console\Commands\BaseCommand;
use App\Http\Requests\Auth\RegisterRequest;
use App\Services\AuthService;
use Faker\Generator;
use Illuminate\Container\Container;
use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\Support\Facades\Validator;

class UserCreate extends BaseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'user:create {--username=} {--nickname=} {--email=} {--password=} {--random} {--verify}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create an user in database';

    /**
     * Execute the console command.
     *
     * @param AuthService $authService
     * @return int
     * @throws BindingResolutionException
     */
    public function handle(AuthService $authService): int
    {
        $rules = (new RegisterRequest())->rules();
        $rules = collect($rules)->except(['password_confirmation'])->all();

        $data = $this->getData();

        $validator = Validator::make($data, $rules);

        if ($validator->fails()) {
            $this->error(trans('console.invalid_data_input'));
            $this->line($validator->errors()->toJson(self::JSON_BEAUTIFY));
            return self::FAILURE;
        }

        $user = $authService->register(
            $data['username'],
            $data['nickname'],
            $data['email'],
            $data['password'],
            $this->option('verify')
        );

        if (null === $user) {
            $this->error(trans('console.user.creation_failed'));
            return self::FAILURE;
        }

        $this->line($user->toJson(self::JSON_BEAUTIFY));

        return self::SUCCESS;
    }

    /**
     * @return array
     * @throws BindingResolutionException
     */
    private function getData(): array
    {
        $random = $this->option('random', false);

        if (false === $random) {
            $data = [];
            $expected = ['username', 'nickname', 'email', 'password'];

            foreach ($expected as $option) {
                $data[$option] = $this->option($option);
            }

            return $data;
        }

        $faker = Container::getInstance()->make(Generator::class);

        return [
            'username' => $faker->userName,
            'nickname' => $faker->userName,
            'email' => $faker->email,
            'password' => 'password'
        ];
    }
}
