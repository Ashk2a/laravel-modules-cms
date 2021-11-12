<?php

namespace Modules\Auth\Console;

use Faker\Generator;
use Illuminate\Container\Container;
use Illuminate\Contracts\Container\BindingResolutionException;
use Modules\Auth\Services\AuthService;
use Modules\Core\Console\AbstractCommand;

class UserCreate extends AbstractCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'user:create {--username=} {--nickname=} {--email=} {--password=} {--verify}';

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
            $this->error('User creation failed.');
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
        $data = [];

        $faker = Container::getInstance()->make(Generator::class);

        $expectedData = [
            'username' => $faker->userName,
            'nickname' => $faker->userName,
            'email' => $faker->email,
            'password' => 'password'
        ];

        foreach ($expectedData as $option => $defaultValue) {
            $data[$option] = $this->option($option) ?? $defaultValue;
        }

        return $data;
    }
}
