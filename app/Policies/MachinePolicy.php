<?php

namespace App\Policies;

use App\Models\Machine;
use App\Models\User;
use Illuminate\Auth\Access\Response;
use Illuminate\Auth\Attributes\Policy;

class MachinePolicy
{
    public function before(User $user, string $ability): bool|null
    {
        if ($user->is_admin) {
            return true;
        }

        return null;
    }



    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Machine $machine): bool|null
    {
        if ($user->is_admin) {
            return true;
        }

        return null;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool|null
    {
        if ($user->is_admin) {
            return true;
        }

        return null;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Machine $machine): bool|null
    {
        if ($user->is_admin) {
            return true;
        }

        return null;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Machine $machine): bool|null
    {
        if ($user->is_admin) {
            return true;
        }

        return null;
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Machine $machine): bool|null
    {
        if ($user->is_admin) {
            return true;
        }

        return null;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Machine $machine): bool|null
    {
        if ($user->is_admin) {
            return true;
        }

        return null;
    }
}
