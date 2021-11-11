<?php

namespace Modules\Auth\Contracts\Hashing;

use Modules\Realm\Models\Account;

interface WotlkHasher
{
    /**
     * Generate and return the salt key
     *
     * @return string
     */
    public function makeSalt(): string;

    /**
     * Generate and return the verifier
     *
     * @param string $username
     * @param string $password
     * @param string $salt
     * @return string
     */
    public function makeVerifier(string $username, string $password, string $salt): string;

    /**
     * Generate and return [salt, verifier]
     *
     * @param string $username
     * @param string $password
     * @return array
     */
    public function make(string $username, string $password): array;

    /**
     * @param string $hashedPassword
     * @param string $username
     * @param string $password
     * @param string $salt
     * @return bool
     */
    public function check(string $hashedPassword, string $username, string $password, string $salt): bool;

    /**
     * @param Account $account
     * @param string $password
     * @return bool
     */
    public function checkWithAccount(Account $account, string $password): bool;
}
