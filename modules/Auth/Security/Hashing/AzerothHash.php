<?php

namespace Modules\Auth\Security\Hashing;

use Exception;
use JetBrains\PhpStorm\Pure;
use Modules\Auth\Contracts\Hashing\WotlkHasher;
use Modules\Auth\Models\Account;

class AzerothHash implements WotlkHasher
{
    /**
     * @inerhitDoc
     */
    public function makeSalt(): string
    {
        try {
            return random_bytes(32);
        } catch (Exception) {
            return '';
        }
    }

    /**
     * @inerhitDoc
     */
    public function makeVerifier(string $username, string $password, string $salt): string
    {
        $g = gmp_init(7);
        $N = gmp_init('894B645E89E1535BBDAD5B8B290650530801B18EBFBF5E8FAB3C82872A3E9BB7', 16);

        // calculate first hash
        $h1 = sha1(strtoupper($username . ':' . $password), true);

        // calculate second hash
        $h2 = sha1($salt . $h1, true);

        // convert to integer (little-endian)
        $h2 = gmp_import($h2, 1, GMP_LSW_FIRST);

        // g^h2 mod N
        $verifier = gmp_powm($g, $h2, $N);

        // convert back to a byte array (little-endian)
        $verifier = gmp_export($verifier, 1, GMP_LSW_FIRST);

        // pad to 32 bytes, remember that zeros go on the end in little-endian!
        return str_pad($verifier, 32, chr(0), STR_PAD_RIGHT);
    }

    /**
     * @inerhitDoc
     */
    public function make(string $username, string $password): array
    {
        $salt = $this->makeSalt();

        return [$salt, $this->makeVerifier($username, $password, $salt)];
    }

    /**
     * @inerhitDoc
     */
    #[Pure] public function check(string $hashedPassword, string $username, string $password, string $salt): bool
    {
        return $hashedPassword === $this->makeVerifier($username, $password, $salt);
    }

    /**
     * @inerhitDoc
     */
    public function checkWithAccount(Account $account, string $password): bool
    {
        return $account->verifier === $this->makeVerifier($account->username, $password, $account->salt);
    }
}
