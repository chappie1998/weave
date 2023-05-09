library;

use ::data_structures::{TokenMetaData, Profile, Post};
use storage_string::*;

// use data_structures::Profile;
use std::{identity::Identity, option::Option};

abi NFT {
    /// Returns the current admin for the contract.
    ///
    /// # Reverts
    ///
    /// * When the contract does not have an admin.
    #[storage(read)]
    fn admin() -> Option<Identity>;

    /// Gives approval to the `approved` user to transfer a specific token on another user's behalf.
    ///
    /// To revoke approval the approved user should be `None`.
    ///
    /// # Arguments
    ///
    /// * `approved` - The user which will be allowed to transfer the token on the owner's behalf.
    /// * `profile_id` - The unique identifier of the token which the owner is giving approval for.
    ///
    /// # Reverts
    ///
    /// * When `profile_id` does not map to an existing token.
    /// * When the sender is not the token's owner.
    #[storage(read, write)]
    fn approve(approved: Identity, profile_id: u64);

    /// Returns the user which is approved to transfer the given token.
    ///
    /// If there is no approved user or the unique identifier does not map to an existing token,
    /// the function will return `None`.
    ///
    /// # Arguments
    ///
    /// * `profile_id` - The unique identifier of the token which the approved user should be returned.
    ///
    /// # Reverts
    ///
    /// * When there is no approved for the `profile_id`.
    #[storage(read)]
    fn approved(profile_id: u64) -> Option<Identity>;

    /// Returns the balance of the `owner` user.
    ///
    /// # Arguments
    ///
    /// * `owner` - The user of which the balance should be returned.
    #[storage(read)]
    fn balance_of(owner: Identity) -> Option<u64>;

    /// Burns the specified token.
    ///
    /// When burned, the metadata of the token is removed. After the token has been burned, no one
    /// will be able to fetch any data about this token or have control over it.
    ///
    /// # Arguments
    ///
    /// * `profile_id` - The unique identifier of the token which is to be burned.
    ///
    /// * Reverts
    ///
    /// * When `profile_id` does not map to an existing token.
    /// * When sender is not the owner of the token.
    #[storage(read, write)]
    fn burn(profile_id: u64);

    #[storage(read, write)]
    fn change_max_supply(max_supply: Option<u64>);

    /// Sets the inital state and unlocks the functionality for the rest of the contract.
    ///
    /// This function can only be called once.
    ///
    /// # Arguments
    ///
    /// * `access_control` - Determines whether only the admin can call the mint function.
    /// * `admin` - The user which has the ability to mint if `access_control` is set to true and change the contract's admin.
    ///
    /// # Reverts
    ///
    /// * When the constructor function has already been called.
    /// * When the `token_supply` is set to 0.
    /// * When `access_control` is set to true and no admin `Identity` was given.
    #[storage(read, write)]
    fn constructor(admin: Identity, max_supply: Option<u64>);

    /// Returns whether the `operator` user is approved to transfer all tokens on the `owner`
    /// user's behalf.
    ///
    /// # Arguments
    ///
    /// * `operator` - The user which has recieved approval to transfer all tokens on the `owner`s behalf.
    /// * `owner` - The user which has given approval to transfer all tokens to the `operator`.
    #[storage(read)]
    fn is_approved_for_all(operator: Identity, owner: Identity) -> Option<bool>;

    /// Mints `amount` number of tokens to the `to` `Identity`.
    ///
    /// Once a token has been minted, it can be transfered and burned.
    ///
    /// # Arguments
    ///
    /// * `amount` - The number of tokens to be minted in this transaction.
    /// * `to` - The user which will own the minted tokens.
    ///
    /// # Reverts
    ///
    /// * When the sender attempts to mint more tokens than total supply.
    /// * When the sender is not the admin and `access_control` is set.
    #[storage(read, write)]
    fn create_profile(to: Identity, token_uri: str[81], handle: StorageString);

    #[storage(read)]
    fn max_supply() -> Option<u64>;

    // fn mint(amount: u64, to: Identity);
    /// Returns the metadata for the token specified
    ///
    /// # Arguments
    ///
    /// * `profile_id` - The unique identifier of the token.
    ///
    /// # Reverts
    ///
    /// * When the `profile_id` does not map to an exsiting token.
    #[storage(read)]
    fn profle_data(profile_id: u64) -> Option<Profile>;

    #[storage(read)]
    fn token_metadata(profile_id: u64) -> Option<TokenMetaData>; 

    /// Returns the user which owns the specified token.
    ///
    /// # Arguments
    ///
    /// * `profile_id` - The unique identifier of the token.
    ///
    /// # Reverts
    ///
    /// * When there is no owner for the `profile_id`.
    #[storage(read)]
    fn owner_of(profile_id: u64) -> Option<Identity>;

    /// Changes the contract's admin.
    ///
    /// This new admin will have access to minting if `access_control` is set to true and be able
    /// to change the contract's admin to a new admin.
    ///
    /// # Arguments
    ///
    /// * `admin` - The user which is to be set as the new admin.
    ///
    /// # Reverts
    ///
    /// * When the sender is not the `admin` in storage.
    #[storage(read, write)]
    fn set_admin(admin: Identity);

    /// Gives the `operator` user approval to transfer ALL tokens owned by the `owner` user.
    ///
    /// This can be dangerous. If a malicous user is set as an operator to another user, they could
    /// drain their wallet.
    ///
    /// # Arguments
    ///
    /// * `approve` - Represents whether the user is giving or revoking operator status.
    /// * `operator` - The user which may transfer all tokens on the owner's behalf.
    #[storage(write)]
    fn set_approval_for_all(approve: bool, operator: Identity);

    /// Returns the total supply of tokens which are currently in existence.
    #[storage(read)]
    fn total_supply() -> u64;

    /// Transfers ownership of the specified token from one user to another.
    ///
    /// Transfers can occur under one of three conditions:
    /// 1. The token's owner is transfering the token.
    /// 2. The token's approved user is transfering the token.
    /// 3. The token's owner has a user set as an operator and is transfering the token.
    ///
    /// # Arguments
    ///
    /// * `to` - The user which the ownership of the token should be set to.
    /// * `profile_id` - The unique identifier of the token which should be transfered.
    ///
    /// # Reverts
    ///
    /// * When the `profile_id` does not map to an existing token.
    /// * When the sender is not the owner of the token.
    /// * When the sender is not approved to transfer the token on the owner's behalf.
    /// * When the sender is not approved to transfer all tokens on the owner's behalf.
    #[storage(read, write)]
    fn transfer(to: Identity, profile_id: u64);

    #[storage(read, write)]
    fn update_profile(profile_id: u64, bio: StorageString, profile_picture: str[81]);

    #[storage(read, write)]
    fn follow(profile_id: u64, follow: u64);

    #[storage(read, write)]
    fn unfollow(profile_id: u64, follow: u64);

    #[storage(read, write)]
    fn create_post(profile_id: u64, token_uri: str[81], collect_amount: u64);

    #[storage(read, write)]
    fn comment_post(profile_id: u64, post_id: u64, token_uri: str[81]);

    #[storage(read, write)]
    fn like_post(profile_id: u64, post_id: u64);

    #[storage(read, write)]
    fn unlike_post(profile_id: u64, post_id: u64);

    #[storage(read, write)]
    fn collect_post(profile_id: u64, post_id: u64);

    fn get_balance() -> u64;

    #[storage(read)]
    fn withdraw_balance(amount: u64);

    #[storage(read)]
    fn post_data(post_id: u64) -> Option<Post>;
}
