/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.42.0
  Forc version: 0.35.5
  Fuel-Core version: 0.17.3
*/

import type {
  BigNumberish,
  BN,
  BytesLike,
  Contract,
  DecodedValue,
  FunctionFragment,
  Interface,
  InvokeFunction,
} from 'fuels';

import type { Option, Enum } from "./common";

export enum AccessErrorInput { SenderCannotSetAccessControl = 'SenderCannotSetAccessControl', SenderNotAdmin = 'SenderNotAdmin', SenderNotOwner = 'SenderNotOwner', SenderNotOwnerOrApproved = 'SenderNotOwnerOrApproved', PostDoesNotExist = 'PostDoesNotExist' };
export enum AccessErrorOutput { SenderCannotSetAccessControl = 'SenderCannotSetAccessControl', SenderNotAdmin = 'SenderNotAdmin', SenderNotOwner = 'SenderNotOwner', SenderNotOwnerOrApproved = 'SenderNotOwnerOrApproved', PostDoesNotExist = 'PostDoesNotExist' };
export type IdentityInput = Enum<{ Address: AddressInput, ContractId: ContractIdInput }>;
export type IdentityOutput = Enum<{ Address: AddressOutput, ContractId: ContractIdOutput }>;
export enum InitErrorInput { AdminIsNone = 'AdminIsNone', CannotReinitialize = 'CannotReinitialize', NotInitialized = 'NotInitialized', HandleExists = 'HandleExists' };
export enum InitErrorOutput { AdminIsNone = 'AdminIsNone', CannotReinitialize = 'CannotReinitialize', NotInitialized = 'NotInitialized', HandleExists = 'HandleExists' };
export enum InputErrorInput { AdminDoesNotExist = 'AdminDoesNotExist', ApprovedDoesNotExist = 'ApprovedDoesNotExist', NotEnoughTokensToMint = 'NotEnoughTokensToMint', OwnerDoesNotExist = 'OwnerDoesNotExist', TokenDoesNotExist = 'TokenDoesNotExist', TokenSupplyCannotBeZero = 'TokenSupplyCannotBeZero', IncorrectAmountProvided = 'IncorrectAmountProvided', AlreadyFollowing = 'AlreadyFollowing', PostAlreadyLiked = 'PostAlreadyLiked', PostNotLiked = 'PostNotLiked', PostDoesNotExist = 'PostDoesNotExist' };
export enum InputErrorOutput { AdminDoesNotExist = 'AdminDoesNotExist', ApprovedDoesNotExist = 'ApprovedDoesNotExist', NotEnoughTokensToMint = 'NotEnoughTokensToMint', OwnerDoesNotExist = 'OwnerDoesNotExist', TokenDoesNotExist = 'TokenDoesNotExist', TokenSupplyCannotBeZero = 'TokenSupplyCannotBeZero', IncorrectAmountProvided = 'IncorrectAmountProvided', AlreadyFollowing = 'AlreadyFollowing', PostAlreadyLiked = 'PostAlreadyLiked', PostNotLiked = 'PostNotLiked', PostDoesNotExist = 'PostDoesNotExist' };

export type AddressInput = { value: string };
export type AddressOutput = AddressInput;
export type AdminEventInput = { admin: IdentityInput };
export type AdminEventOutput = { admin: IdentityOutput };
export type ApprovalEventInput = { approved: IdentityInput, owner: IdentityInput, profile_id: BigNumberish };
export type ApprovalEventOutput = { approved: IdentityOutput, owner: IdentityOutput, profile_id: BN };
export type BurnEventInput = { owner: IdentityInput, profile_id: BigNumberish };
export type BurnEventOutput = { owner: IdentityOutput, profile_id: BN };
export type CommentEventInput = { profile_id: BigNumberish, post_id: BigNumberish, comment_id: BigNumberish, token_uri: string };
export type CommentEventOutput = { profile_id: BN, post_id: BN, comment_id: BN, token_uri: string };
export type ContractIdInput = { value: string };
export type ContractIdOutput = ContractIdInput;
export type CreateProfilEventInput = { owner: IdentityInput, profile_id: BigNumberish, token_uri: string, handle: string };
export type CreateProfilEventOutput = { owner: IdentityOutput, profile_id: BN, token_uri: string, handle: string };
export type FollowEventInput = { profile_id: BigNumberish, follow: BigNumberish };
export type FollowEventOutput = { profile_id: BN, follow: BN };
export type LikedPostEventInput = { profile_id: BigNumberish, post_id: BigNumberish };
export type LikedPostEventOutput = { profile_id: BN, post_id: BN };
export type MintEventInput = { owner: IdentityInput, token_id: BigNumberish };
export type MintEventOutput = { owner: IdentityOutput, token_id: BN };
export type OperatorEventInput = { approve: boolean, operator: IdentityInput, owner: IdentityInput };
export type OperatorEventOutput = { approve: boolean, operator: IdentityOutput, owner: IdentityOutput };
export type PostInput = { token_uri: string, profile_id: BigNumberish, timestamp: BigNumberish, collect_amount: BigNumberish, likes: BigNumberish, swayed: BigNumberish, comments: BigNumberish };
export type PostOutput = { token_uri: string, profile_id: BN, timestamp: BN, collect_amount: BN, likes: BN, swayed: BN, comments: BN };
export type PostCollectedEventInput = { profile_id: BigNumberish, post_id: BigNumberish, collect_amount: BigNumberish };
export type PostCollectedEventOutput = { profile_id: BN, post_id: BN, collect_amount: BN };
export type PostEventInput = { post_id: BigNumberish, profile_id: BigNumberish, token_uri: string, collect_amount: BigNumberish };
export type PostEventOutput = { post_id: BN, profile_id: BN, token_uri: string, collect_amount: BN };
export type ProfileInput = { token_uri: string, handle: string, profile_picture: Option<string> };
export type ProfileOutput = ProfileInput;
export type ProfileUpdatEventInput = { profile_id: BigNumberish, profile_picture: string };
export type ProfileUpdatEventOutput = { profile_id: BN, profile_picture: string };
export type SetDefaultProfileByAddressInput = { profile_id: BigNumberish, owner: IdentityInput };
export type SetDefaultProfileByAddressOutput = { profile_id: BN, owner: IdentityOutput };
export type TokenMetaDataInput = { token_uri: string };
export type TokenMetaDataOutput = TokenMetaDataInput;
export type TransferEventInput = { from: IdentityInput, sender: IdentityInput, to: IdentityInput, profile_id: BigNumberish };
export type TransferEventOutput = { from: IdentityOutput, sender: IdentityOutput, to: IdentityOutput, profile_id: BN };
export type UnfollowEventInput = { profile_id: BigNumberish, follow: BigNumberish };
export type UnfollowEventOutput = { profile_id: BN, follow: BN };
export type UnlikedPostEventInput = { profile_id: BigNumberish, post_id: BigNumberish };
export type UnlikedPostEventOutput = { profile_id: BN, post_id: BN };

interface NFTAbiInterface extends Interface {
  functions: {
    admin: FunctionFragment;
    approve: FunctionFragment;
    approved: FunctionFragment;
    balance_of: FunctionFragment;
    burn: FunctionFragment;
    change_max_supply: FunctionFragment;
    collect_post: FunctionFragment;
    comment_post: FunctionFragment;
    constructor: FunctionFragment;
    create_post: FunctionFragment;
    create_profile: FunctionFragment;
    follow: FunctionFragment;
    get_balance: FunctionFragment;
    get_default_profile_by_address: FunctionFragment;
    get_follow: FunctionFragment;
    is_approved_for_all: FunctionFragment;
    like_post: FunctionFragment;
    max_supply: FunctionFragment;
    owner_of: FunctionFragment;
    post_data: FunctionFragment;
    profle_data: FunctionFragment;
    set_admin: FunctionFragment;
    set_approval_for_all: FunctionFragment;
    set_default_profile_by_address: FunctionFragment;
    token_metadata: FunctionFragment;
    total_supply: FunctionFragment;
    transfer: FunctionFragment;
    unfollow: FunctionFragment;
    unlike_post: FunctionFragment;
    update_profile: FunctionFragment;
    withdraw_balance: FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'admin', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'approve', values: [IdentityInput, BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'approved', values: [BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'balance_of', values: [IdentityInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'burn', values: [BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'change_max_supply', values: [Option<BigNumberish>]): Uint8Array;
  encodeFunctionData(functionFragment: 'collect_post', values: [BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'comment_post', values: [BigNumberish, string]): Uint8Array;
  encodeFunctionData(functionFragment: 'constructor', values: [IdentityInput, BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'create_post', values: [string, BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'create_profile', values: [IdentityInput, string, string]): Uint8Array;
  encodeFunctionData(functionFragment: 'follow', values: [BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'get_balance', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'get_default_profile_by_address', values: [IdentityInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'get_follow', values: [BigNumberish, BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'is_approved_for_all', values: [IdentityInput, IdentityInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'like_post', values: [BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'max_supply', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'owner_of', values: [BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'post_data', values: [BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'profle_data', values: [BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'set_admin', values: [IdentityInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'set_approval_for_all', values: [boolean, IdentityInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'set_default_profile_by_address', values: [BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'token_metadata', values: [BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'total_supply', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'transfer', values: [IdentityInput, BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'unfollow', values: [BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'unlike_post', values: [BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'update_profile', values: [string]): Uint8Array;
  encodeFunctionData(functionFragment: 'withdraw_balance', values: [BigNumberish]): Uint8Array;

  decodeFunctionData(functionFragment: 'admin', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'approve', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'approved', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'balance_of', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'burn', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'change_max_supply', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'collect_post', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'comment_post', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'constructor', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'create_post', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'create_profile', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'follow', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_balance', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_default_profile_by_address', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_follow', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'is_approved_for_all', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'like_post', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'max_supply', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'owner_of', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'post_data', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'profle_data', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'set_admin', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'set_approval_for_all', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'set_default_profile_by_address', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'token_metadata', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'total_supply', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'transfer', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'unfollow', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'unlike_post', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'update_profile', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'withdraw_balance', data: BytesLike): DecodedValue;
}

export class NFTAbi extends Contract {
  interface: NFTAbiInterface;
  functions: {
    admin: InvokeFunction<[], Option<IdentityOutput>>;
    approve: InvokeFunction<[approved: IdentityInput, profile_id: BigNumberish], void>;
    approved: InvokeFunction<[profile_id: BigNumberish], Option<IdentityOutput>>;
    balance_of: InvokeFunction<[owner: IdentityInput], Option<BN>>;
    burn: InvokeFunction<[profile_id: BigNumberish], void>;
    change_max_supply: InvokeFunction<[max_supply: Option<BigNumberish>], void>;
    collect_post: InvokeFunction<[post_id: BigNumberish], void>;
    comment_post: InvokeFunction<[post_id: BigNumberish, token_uri: string], void>;
    constructor: InvokeFunction<[admin: IdentityInput, max_supply: BigNumberish], void>;
    create_post: InvokeFunction<[token_uri: string, collect_amount: BigNumberish], void>;
    create_profile: InvokeFunction<[to: IdentityInput, token_uri: string, handle: string], void>;
    follow: InvokeFunction<[follow: BigNumberish], void>;
    get_balance: InvokeFunction<[], BN>;
    get_default_profile_by_address: InvokeFunction<[address: IdentityInput], Option<BN>>;
    get_follow: InvokeFunction<[profile_id: BigNumberish, follow: BigNumberish], Option<boolean>>;
    is_approved_for_all: InvokeFunction<[operator: IdentityInput, owner: IdentityInput], Option<boolean>>;
    like_post: InvokeFunction<[post_id: BigNumberish], void>;
    max_supply: InvokeFunction<[], Option<BN>>;
    owner_of: InvokeFunction<[profile_id: BigNumberish], Option<IdentityOutput>>;
    post_data: InvokeFunction<[post_id: BigNumberish], Option<PostOutput>>;
    profle_data: InvokeFunction<[profile_id: BigNumberish], Option<ProfileOutput>>;
    set_admin: InvokeFunction<[admin: IdentityInput], void>;
    set_approval_for_all: InvokeFunction<[approve: boolean, operator: IdentityInput], void>;
    set_default_profile_by_address: InvokeFunction<[profile_id: BigNumberish], void>;
    token_metadata: InvokeFunction<[profile_id: BigNumberish], Option<TokenMetaDataOutput>>;
    total_supply: InvokeFunction<[], BN>;
    transfer: InvokeFunction<[to: IdentityInput, profile_id: BigNumberish], void>;
    unfollow: InvokeFunction<[follow: BigNumberish], void>;
    unlike_post: InvokeFunction<[post_id: BigNumberish], void>;
    update_profile: InvokeFunction<[profile_picture: string], void>;
    withdraw_balance: InvokeFunction<[amount: BigNumberish], void>;
  };
}
