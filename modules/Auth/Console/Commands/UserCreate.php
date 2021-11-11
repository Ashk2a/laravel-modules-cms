<?php

namespace Modules\Auth\Console\Commands;

use Faker\Generator;
use Illuminate\Container\Container;
use Illuminate\Contracts\Container\BindingResolutionException;
use Modules\Auth\Services\AuthService;
use Modules\Core\Console\Commands\AbstractCommand;

class UserCreate extends AbstractCommand
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
        $data = $this->getData();

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
