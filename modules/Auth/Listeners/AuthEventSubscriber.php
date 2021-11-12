<?php

namespace Modules\Auth\Listeners;

use Modules\Auth\Events\UserForgetPassword;
use Modules\Auth\Events\UserLogin;
use Modules\Auth\Events\UserLoginFailed;
use Modules\Auth\Events\UserRegistered;
use Modules\Auth\Events\UserResetPassword;
use Modules\Auth\Events\UserVerified;
use Modules\Auth\Notifications\ResetPasswordProcedure;
use Modules\Auth\Notifications\VerificationSucceed;
use Modules\Auth\Notifications\Welcome;
use Modules\Core\Listeners\AbstractEventSubscriber;

class AuthEventSubscriber extends AbstractEventSubscriber
{
    protected array $listeners = [
        UserRegistered::class => 'onUserRegistered',
        UserLogin::class => 'onUserLogin',
        UserLoginFailed::class => 'onUserLoginFailed',
        UserVerified::class => 'onUserVerified',
        UserForgetPassword::class => 'onUserForgetPassword',
        UserResetPassword::class => 'onUserResetPassword',
    ];

    /**
     * @param UserRegistered $event
     * @return void
     */
    public function onUserRegistered(UserRegistered $event): void
    {
        $event->user->notify(new Welcome($event));
    }

    /**
     * @param UserLogin $event
     * @return void
     */
    public function onUserLogin(UserLogin $event): void
    {
    }

    /**
     * @param UserLoginFailed $event
     * @return void
     */
    public function onUserLoginFailed(UserLoginFailed $event): void
    {
    }

    /**
     * @param UserVerified $event
     * @return void
     */
    public function onUserVerified(UserVerified $event): void
    {
        if (false === $event->autoCompleted) {
            $event->verification->user->notify(new VerificationSucceed($event));
        }
    }

    /**
     * @param UserForgetPassword $event
     * @return void
     */
    public function onUserForgetPassword(UserForgetPassword $event): void
    {
        $event->reminder->user->notify(new ResetPasswordProcedure($event));
    }

    /**
     * @param UserResetPassword $event
     * @return void
     */
    public function onUserResetPassword(UserResetPassword $event): void
    {
    }
}
