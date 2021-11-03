<?php

namespace App\Listeners;

use App\Abstractions\Listeners\BaseEventSubscriber;
use App\Events\UserForgetPassword;
use App\Events\UserLogin;
use App\Events\UserLoginFailed;
use App\Events\UserRegistered;
use App\Events\UserResetPassword;
use App\Events\UserVerified;
use App\Notifications\ResetPasswordProcedure;
use App\Notifications\VerificationSucceed;
use App\Notifications\Welcome;

class UserEventSubscriber extends BaseEventSubscriber
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

    public function onUserResetPassword(UserResetPassword $event): void
    {
    }
}
