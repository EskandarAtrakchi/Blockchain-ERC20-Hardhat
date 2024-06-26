/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { ERC20, ERC20Interface } from "../ERC20";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "remaining",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523480156200001157600080fd5b506012600a6200002291906200011c565b6301406f4062000033919062000259565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054608081815250506200030d565b6000808291508390505b60018511156200011357808604811115620000eb57620000ea620002d1565b5b6001851615620000fb5780820291505b80810290506200010b8562000300565b9450620000cb565b94509492505050565b60006200012982620002ba565b91506200013683620002c4565b9250620001657fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84846200016d565b905092915050565b6000826200017f576001905062000252565b816200018f576000905062000252565b8160018114620001a85760028114620001b357620001e9565b600191505062000252565b60ff841115620001c857620001c7620002d1565b5b8360020a915084821115620001e257620001e1620002d1565b5b5062000252565b5060208310610133831016604e8410600b8410161715620002235782820a9050838111156200021d576200021c620002d1565b5b62000252565b620002328484846001620000c1565b925090508184048111156200024c576200024b620002d1565b5b81810290505b9392505050565b60006200026682620002ba565b91506200027383620002ba565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615620002af57620002ae620002d1565b5b828202905092915050565b6000819050919050565b600060ff82169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b608051610d226200032960003960006103330152610d226000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063313ce56711610066578063313ce5671461013457806370a082311461015257806395d89b4114610182578063a9059cbb146101a0578063dd62ed3e146101d057610093565b806306fdde0314610098578063095ea7b3146100b657806318160ddd146100e657806323b872dd14610104575b600080fd5b6100a0610200565b6040516100ad9190610ac0565b60405180910390f35b6100d060048036038101906100cb9190610952565b61023d565b6040516100dd9190610aa5565b60405180910390f35b6100ee61032f565b6040516100fb9190610b42565b60405180910390f35b61011e60048036038101906101199190610903565b610357565b60405161012b9190610aa5565b60405180910390f35b61013c6105e1565b6040516101499190610b42565b60405180910390f35b61016c6004803603810190610167919061089e565b6105ed565b6040516101799190610b42565b60405180910390f35b61018a610635565b6040516101979190610ac0565b60405180910390f35b6101ba60048036038101906101b59190610952565b610672565b6040516101c79190610aa5565b60405180910390f35b6101ea60048036038101906101e591906108c7565b6107ed565b6040516101f79190610b42565b60405180910390f35b60606040518060400160405280600981526020017f54657374546f6b656e0000000000000000000000000000000000000000000000815250905090565b600081600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161031d9190610b42565b60405180910390a36001905092915050565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b600081600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610418576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161040f90610b22565b60405180910390fd5b816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610499576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049090610b02565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546105259190610bcf565b92505081905550816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461057a9190610bcf565b92505081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546105cf9190610b79565b92505081905550600190509392505050565b6000601260ff16905090565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606040518060400160405280600281526020017f5454000000000000000000000000000000000000000000000000000000000000815250905090565b6000816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156106f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ec90610ae2565b60405180910390fd5b816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546107439190610bcf565b92505081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546107989190610b79565b92505081905550818373ffffffffffffffffffffffffffffffffffffffff167f69ca02dd4edd7bf0a4abb9ed3b7af3f14778db5d61921c7dc7cd545266326de260405160405180910390a36001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60008135905061088381610cbe565b92915050565b60008135905061089881610cd5565b92915050565b6000602082840312156108b057600080fd5b60006108be84828501610874565b91505092915050565b600080604083850312156108da57600080fd5b60006108e885828601610874565b92505060206108f985828601610874565b9150509250929050565b60008060006060848603121561091857600080fd5b600061092686828701610874565b935050602061093786828701610874565b925050604061094886828701610889565b9150509250925092565b6000806040838503121561096557600080fd5b600061097385828601610874565b925050602061098485828601610889565b9150509250929050565b61099781610c15565b82525050565b60006109a882610b5d565b6109b28185610b68565b93506109c2818560208601610c4b565b6109cb81610cad565b840191505092915050565b60006109e3601083610b68565b91507f4e6f7420656e6f7567682066756e6473000000000000000000000000000000006000830152602082019050919050565b6000610a23600983610b68565b91507f4e6f2066756e64732e00000000000000000000000000000000000000000000006000830152602082019050919050565b6000610a63600d83610b68565b91507f4e6f20616c6c6f77616e63652e000000000000000000000000000000000000006000830152602082019050919050565b610a9f81610c41565b82525050565b6000602082019050610aba600083018461098e565b92915050565b60006020820190508181036000830152610ada818461099d565b905092915050565b60006020820190508181036000830152610afb816109d6565b9050919050565b60006020820190508181036000830152610b1b81610a16565b9050919050565b60006020820190508181036000830152610b3b81610a56565b9050919050565b6000602082019050610b576000830184610a96565b92915050565b600081519050919050565b600082825260208201905092915050565b6000610b8482610c41565b9150610b8f83610c41565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610bc457610bc3610c7e565b5b828201905092915050565b6000610bda82610c41565b9150610be583610c41565b925082821015610bf857610bf7610c7e565b5b828203905092915050565b6000610c0e82610c21565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015610c69578082015181840152602081019050610c4e565b83811115610c78576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b610cc781610c03565b8114610cd257600080fd5b50565b610cde81610c41565b8114610ce957600080fd5b5056fea264697066735822122099096c1d335f53d43c180a3dab68e6553c7329df5a977c2b7f7cb2c642fc3bf264736f6c63430008000033";

type ERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20__factory extends ContractFactory {
  constructor(...args: ERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      ERC20 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ERC20__factory {
    return super.connect(runner) as ERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20Interface {
    return new Interface(_abi) as ERC20Interface;
  }
  static connect(address: string, runner?: ContractRunner | null): ERC20 {
    return new Contract(address, _abi, runner) as unknown as ERC20;
  }
}
