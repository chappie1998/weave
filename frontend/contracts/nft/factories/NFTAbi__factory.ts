/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.42.0
  Forc version: 0.35.5
  Fuel-Core version: 0.17.3
*/

import { Interface, Contract } from "fuels";
import type { Provider, Account, AbstractAddress } from "fuels";
import type { NFTAbi, NFTAbiInterface } from "../NFTAbi";

const _abi = {
  "types": [
    {
      "typeId": 0,
      "type": "()",
      "components": [],
      "typeParameters": null
    },
    {
      "typeId": 1,
      "type": "b256",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 2,
      "type": "bool",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 3,
      "type": "enum AccessError",
      "components": [
        {
          "name": "SenderCannotSetAccessControl",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "SenderNotAdmin",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "SenderNotOwner",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "SenderNotOwnerOrApproved",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "PostDoesNotExist",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 4,
      "type": "enum Identity",
      "components": [
        {
          "name": "Address",
          "type": 11,
          "typeArguments": null
        },
        {
          "name": "ContractId",
          "type": 16,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 5,
      "type": "enum InitError",
      "components": [
        {
          "name": "AdminIsNone",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "CannotReinitialize",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "NotInitialized",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "HandleExists",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 6,
      "type": "enum InputError",
      "components": [
        {
          "name": "AdminDoesNotExist",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "ApprovedDoesNotExist",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "NotEnoughTokensToMint",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "OwnerDoesNotExist",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "TokenDoesNotExist",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "TokenSupplyCannotBeZero",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "IncorrectAmountProvided",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "AlreadyFollowing",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "PostAlreadyLiked",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "PostNotLiked",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "PostDoesNotExist",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 7,
      "type": "enum Option",
      "components": [
        {
          "name": "None",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "Some",
          "type": 8,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        8
      ]
    },
    {
      "typeId": 8,
      "type": "generic T",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 9,
      "type": "str[15]",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 10,
      "type": "str[81]",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 11,
      "type": "struct Address",
      "components": [
        {
          "name": "value",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 12,
      "type": "struct AdminEvent",
      "components": [
        {
          "name": "admin",
          "type": 4,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 13,
      "type": "struct ApprovalEvent",
      "components": [
        {
          "name": "approved",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "owner",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "profile_id",
          "type": 32,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 14,
      "type": "struct BurnEvent",
      "components": [
        {
          "name": "owner",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "profile_id",
          "type": 32,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 15,
      "type": "struct CommentEvent",
      "components": [
        {
          "name": "profile_id",
          "type": 32,
          "typeArguments": null
        },
        {
          "name": "post_id",
          "type": 32,
          "typeArguments": null
        },
        {
          "name": "comment_id",
          "type": 32,
          "typeArguments": null
        },
        {
          "name": "token_uri",
          "type": 10,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 16,
      "type": "struct ContractId",
      "components": [
        {
          "name": "value",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 17,
      "type": "struct CreateProfilEvent",
      "components": [
        {
          "name": "owner",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "profile_id",
          "type": 32,
          "typeArguments": null
        },
        {
          "name": "token_uri",
          "type": 10,
          "typeArguments": null
        },
        {
          "name": "handle",
          "type": 9,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 18,
      "type": "struct FollowEvent",
      "components": [
        {
          "name": "profile_id",
          "type": 32,
          "typeArguments": null
        },
        {
          "name": "follow",
          "type": 32,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 19,
      "type": "struct LikedPostEvent",
      "components": [
        {
          "name": "profile_id",
          "type": 32,
          "typeArguments": null
        },
        {
          "name": "post_id",
          "type": 32,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 20,
      "type": "struct MintEvent",
      "components": [
        {
          "name": "owner",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "token_id",
          "type": 32,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 21,
      "type": "struct OperatorEvent",
      "components": [
        {
          "name": "approve",
          "type": 2,
          "typeArguments": null
        },
        {
          "name": "operator",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "owner",
          "type": 4,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 22,
      "type": "struct Post",
      "components": [
        {
          "name": "token_uri",
          "type": 10,
          "typeArguments": null
        },
        {
          "name": "profile_id",
          "type": 32,
          "typeArguments": null
        },
        {
          "name": "timestamp",
          "type": 32,
          "typeArguments": null
        },
        {
          "name": "collect_amount",
          "type": 32,
          "typeArguments": null
        },
        {
          "name": "likes",
          "type": 32,
          "typeArguments": null
        },
        {
          "name": "swayed",
          "type": 32,
          "typeArguments": null
        },
        {
          "name": "comments",
          "type": 32,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 23,
      "type": "struct PostCollectedEvent",
      "components": [
        {
          "name": "profile_id",
          "type": 32,
          "typeArguments": null
        },
        {
          "name": "post_id",
          "type": 32,
          "typeArguments": null
        },
        {
          "name": "collect_amount",
          "type": 32,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 24,
      "type": "struct PostEvent",
      "components": [
        {
          "name": "post_id",
          "type": 32,
          "typeArguments": null
        },
        {
          "name": "profile_id",
          "type": 32,
          "typeArguments": null
        },
        {
          "name": "token_uri",
          "type": 10,
          "typeArguments": null
        },
        {
          "name": "collect_amount",
          "type": 32,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 25,
      "type": "struct Profile",
      "components": [
        {
          "name": "token_uri",
          "type": 10,
          "typeArguments": null
        },
        {
          "name": "handle",
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "profile_picture",
          "type": 7,
          "typeArguments": [
            {
              "name": "",
              "type": 10,
              "typeArguments": null
            }
          ]
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 26,
      "type": "struct ProfileUpdatEvent",
      "components": [
        {
          "name": "profile_id",
          "type": 32,
          "typeArguments": null
        },
        {
          "name": "profile_picture",
          "type": 10,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 27,
      "type": "struct SetDefaultProfileByAddress",
      "components": [
        {
          "name": "profile_id",
          "type": 32,
          "typeArguments": null
        },
        {
          "name": "owner",
          "type": 4,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 28,
      "type": "struct TokenMetaData",
      "components": [
        {
          "name": "token_uri",
          "type": 10,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 29,
      "type": "struct TransferEvent",
      "components": [
        {
          "name": "from",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "sender",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "to",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "profile_id",
          "type": 32,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 30,
      "type": "struct UnfollowEvent",
      "components": [
        {
          "name": "profile_id",
          "type": 32,
          "typeArguments": null
        },
        {
          "name": "follow",
          "type": 32,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 31,
      "type": "struct UnlikedPostEvent",
      "components": [
        {
          "name": "profile_id",
          "type": 32,
          "typeArguments": null
        },
        {
          "name": "post_id",
          "type": 32,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 32,
      "type": "u64",
      "components": null,
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [],
      "name": "admin",
      "output": {
        "name": "",
        "type": 7,
        "typeArguments": [
          {
            "name": "",
            "type": 4,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "approved",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "profile_id",
          "type": 32,
          "typeArguments": null
        }
      ],
      "name": "approve",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "profile_id",
          "type": 32,
          "typeArguments": null
        }
      ],
      "name": "approved",
      "output": {
        "name": "",
        "type": 7,
        "typeArguments": [
          {
            "name": "",
            "type": 4,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "owner",
          "type": 4,
          "typeArguments": null
        }
      ],
      "name": "balance_of",
      "output": {
        "name": "",
        "type": 7,
        "typeArguments": [
          {
            "name": "",
            "type": 32,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "profile_id",
          "type": 32,
          "typeArguments": null
        }
      ],
      "name": "burn",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "max_supply",
          "type": 7,
          "typeArguments": [
            {
              "name": "",
              "type": 32,
              "typeArguments": null
            }
          ]
        }
      ],
      "name": "change_max_supply",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "post_id",
          "type": 32,
          "typeArguments": null
        }
      ],
      "name": "collect_post",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        },
        {
          "name": "payable",
          "arguments": []
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "post_id",
          "type": 32,
          "typeArguments": null
        },
        {
          "name": "token_uri",
          "type": 10,
          "typeArguments": null
        }
      ],
      "name": "comment_post",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "admin",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "max_supply",
          "type": 32,
          "typeArguments": null
        }
      ],
      "name": "constructor",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "token_uri",
          "type": 10,
          "typeArguments": null
        },
        {
          "name": "collect_amount",
          "type": 32,
          "typeArguments": null
        }
      ],
      "name": "create_post",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "to",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "token_uri",
          "type": 10,
          "typeArguments": null
        },
        {
          "name": "handle",
          "type": 9,
          "typeArguments": null
        }
      ],
      "name": "create_profile",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "follow",
          "type": 32,
          "typeArguments": null
        }
      ],
      "name": "follow",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "get_balance",
      "output": {
        "name": "",
        "type": 32,
        "typeArguments": null
      },
      "attributes": null
    },
    {
      "inputs": [
        {
          "name": "address",
          "type": 4,
          "typeArguments": null
        }
      ],
      "name": "get_default_profile_by_address",
      "output": {
        "name": "",
        "type": 7,
        "typeArguments": [
          {
            "name": "",
            "type": 32,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "profile_id",
          "type": 32,
          "typeArguments": null
        },
        {
          "name": "follow",
          "type": 32,
          "typeArguments": null
        }
      ],
      "name": "get_follow",
      "output": {
        "name": "",
        "type": 7,
        "typeArguments": [
          {
            "name": "",
            "type": 2,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "operator",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "owner",
          "type": 4,
          "typeArguments": null
        }
      ],
      "name": "is_approved_for_all",
      "output": {
        "name": "",
        "type": 7,
        "typeArguments": [
          {
            "name": "",
            "type": 2,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "post_id",
          "type": 32,
          "typeArguments": null
        }
      ],
      "name": "like_post",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "max_supply",
      "output": {
        "name": "",
        "type": 7,
        "typeArguments": [
          {
            "name": "",
            "type": 32,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "profile_id",
          "type": 32,
          "typeArguments": null
        }
      ],
      "name": "owner_of",
      "output": {
        "name": "",
        "type": 7,
        "typeArguments": [
          {
            "name": "",
            "type": 4,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "post_id",
          "type": 32,
          "typeArguments": null
        }
      ],
      "name": "post_data",
      "output": {
        "name": "",
        "type": 7,
        "typeArguments": [
          {
            "name": "",
            "type": 22,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "profile_id",
          "type": 32,
          "typeArguments": null
        }
      ],
      "name": "profle_data",
      "output": {
        "name": "",
        "type": 7,
        "typeArguments": [
          {
            "name": "",
            "type": 25,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "admin",
          "type": 4,
          "typeArguments": null
        }
      ],
      "name": "set_admin",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "approve",
          "type": 2,
          "typeArguments": null
        },
        {
          "name": "operator",
          "type": 4,
          "typeArguments": null
        }
      ],
      "name": "set_approval_for_all",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "profile_id",
          "type": 32,
          "typeArguments": null
        }
      ],
      "name": "set_default_profile_by_address",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "profile_id",
          "type": 32,
          "typeArguments": null
        }
      ],
      "name": "token_metadata",
      "output": {
        "name": "",
        "type": 7,
        "typeArguments": [
          {
            "name": "",
            "type": 28,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "total_supply",
      "output": {
        "name": "",
        "type": 32,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "to",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "profile_id",
          "type": 32,
          "typeArguments": null
        }
      ],
      "name": "transfer",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "follow",
          "type": 32,
          "typeArguments": null
        }
      ],
      "name": "unfollow",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "post_id",
          "type": 32,
          "typeArguments": null
        }
      ],
      "name": "unlike_post",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "profile_picture",
          "type": 10,
          "typeArguments": null
        }
      ],
      "name": "update_profile",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "amount",
          "type": 32,
          "typeArguments": null
        }
      ],
      "name": "withdraw_balance",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    }
  ],
  "loggedTypes": [
    {
      "logId": 0,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 1,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": 2,
      "loggedType": {
        "name": "",
        "type": 13,
        "typeArguments": []
      }
    },
    {
      "logId": 3,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 4,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": 5,
      "loggedType": {
        "name": "",
        "type": 14,
        "typeArguments": []
      }
    },
    {
      "logId": 6,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 7,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": 8,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 9,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": 10,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 11,
      "loggedType": {
        "name": "",
        "type": 23,
        "typeArguments": []
      }
    },
    {
      "logId": 12,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 13,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": 14,
      "loggedType": {
        "name": "",
        "type": 15,
        "typeArguments": []
      }
    },
    {
      "logId": 15,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 16,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 17,
      "loggedType": {
        "name": "",
        "type": 20,
        "typeArguments": []
      }
    },
    {
      "logId": 18,
      "loggedType": {
        "name": "",
        "type": 24,
        "typeArguments": []
      }
    },
    {
      "logId": 19,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 20,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 21,
      "loggedType": {
        "name": "",
        "type": 20,
        "typeArguments": []
      }
    },
    {
      "logId": 22,
      "loggedType": {
        "name": "",
        "type": 17,
        "typeArguments": []
      }
    },
    {
      "logId": 23,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 24,
      "loggedType": {
        "name": "",
        "type": 18,
        "typeArguments": []
      }
    },
    {
      "logId": 25,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 26,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 27,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": 28,
      "loggedType": {
        "name": "",
        "type": 19,
        "typeArguments": []
      }
    },
    {
      "logId": 29,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": 30,
      "loggedType": {
        "name": "",
        "type": 12,
        "typeArguments": []
      }
    },
    {
      "logId": 31,
      "loggedType": {
        "name": "",
        "type": 21,
        "typeArguments": []
      }
    },
    {
      "logId": 32,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 33,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": 34,
      "loggedType": {
        "name": "",
        "type": 27,
        "typeArguments": []
      }
    },
    {
      "logId": 35,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 36,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": 37,
      "loggedType": {
        "name": "",
        "type": 29,
        "typeArguments": []
      }
    },
    {
      "logId": 38,
      "loggedType": {
        "name": "",
        "type": 30,
        "typeArguments": []
      }
    },
    {
      "logId": 39,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 40,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 41,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": 42,
      "loggedType": {
        "name": "",
        "type": 31,
        "typeArguments": []
      }
    },
    {
      "logId": 43,
      "loggedType": {
        "name": "",
        "type": 26,
        "typeArguments": []
      }
    },
    {
      "logId": 44,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 45,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    }
  ],
  "messagesTypes": [],
  "configurables": []
}

export class NFTAbi__factory {
  static readonly abi = _abi
  static createInterface(): NFTAbiInterface {
    return new Interface(_abi) as unknown as NFTAbiInterface
  }
  static connect(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider
  ): NFTAbi {
    return new Contract(id, _abi, accountOrProvider) as unknown as NFTAbi
  }
}