[@thanos-wallet/dapp](../README.md) › [ThanosWallet](thanoswallet.md)

# Class: ThanosWallet

## Hierarchy

* **ThanosWallet**

## Implements

* WalletProvider

## Index

### Constructors

* [constructor](thanoswallet.md#constructor)

### Properties

* [appName](thanoswallet.md#private-appname)
* [pkh](thanoswallet.md#private-optional-pkh)
* [rpc](thanoswallet.md#optional-rpc)
* [isAvailable](thanoswallet.md#static-isavailable)
* [onAvailabilityChange](thanoswallet.md#static-onavailabilitychange)

### Accessors

* [connected](thanoswallet.md#connected)

### Methods

* [connect](thanoswallet.md#connect)
* [getPKH](thanoswallet.md#getpkh)
* [mapDelegateParamsToWalletParams](thanoswallet.md#mapdelegateparamstowalletparams)
* [mapOriginateParamsToWalletParams](thanoswallet.md#maporiginateparamstowalletparams)
* [mapTransferParamsToWalletParams](thanoswallet.md#maptransferparamstowalletparams)
* [sendOperations](thanoswallet.md#sendoperations)
* [toTezos](thanoswallet.md#totezos)

## Constructors

###  constructor

\+ **new ThanosWallet**(`appName`: string): *[ThanosWallet](thanoswallet.md)*

*Defined in [taquito-wallet.ts:27](https://github.com/madfish-solutions/thanoswallet-dapp/blob/6ebdacd/src/taquito-wallet.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`appName` | string |

**Returns:** *[ThanosWallet](thanoswallet.md)*

## Properties

### `Private` appName

• **appName**: *string*

*Defined in [taquito-wallet.ts:29](https://github.com/madfish-solutions/thanoswallet-dapp/blob/6ebdacd/src/taquito-wallet.ts#L29)*

___

### `Private` `Optional` pkh

• **pkh**? : *undefined | string*

*Defined in [taquito-wallet.ts:26](https://github.com/madfish-solutions/thanoswallet-dapp/blob/6ebdacd/src/taquito-wallet.ts#L26)*

___

### `Optional` rpc

• **rpc**? : *undefined | string*

*Defined in [taquito-wallet.ts:27](https://github.com/madfish-solutions/thanoswallet-dapp/blob/6ebdacd/src/taquito-wallet.ts#L27)*

___

### `Static` isAvailable

▪ **isAvailable**: *[isAvailable](../README.md#isavailable)* = isAvailable

*Defined in [taquito-wallet.ts:23](https://github.com/madfish-solutions/thanoswallet-dapp/blob/6ebdacd/src/taquito-wallet.ts#L23)*

___

### `Static` onAvailabilityChange

▪ **onAvailabilityChange**: *[onAvailabilityChange](../README.md#onavailabilitychange)* = onAvailabilityChange

*Defined in [taquito-wallet.ts:24](https://github.com/madfish-solutions/thanoswallet-dapp/blob/6ebdacd/src/taquito-wallet.ts#L24)*

## Accessors

###  connected

• **get connected**(): *boolean*

*Defined in [taquito-wallet.ts:31](https://github.com/madfish-solutions/thanoswallet-dapp/blob/6ebdacd/src/taquito-wallet.ts#L31)*

**Returns:** *boolean*

## Methods

###  connect

▸ **connect**(`network`: [ThanosDAppNetwork](../README.md#thanosdappnetwork), `opts`: object): *Promise‹void›*

*Defined in [taquito-wallet.ts:42](https://github.com/madfish-solutions/thanoswallet-dapp/blob/6ebdacd/src/taquito-wallet.ts#L42)*

**Parameters:**

▪ **network**: *[ThanosDAppNetwork](../README.md#thanosdappnetwork)*

▪`Default value`  **opts**: *object*= { forcePermission: false }

Name | Type | Default |
------ | ------ | ------ |
`forcePermission` | boolean | false |

**Returns:** *Promise‹void›*

___

###  getPKH

▸ **getPKH**(): *Promise‹string›*

*Defined in [taquito-wallet.ts:52](https://github.com/madfish-solutions/thanoswallet-dapp/blob/6ebdacd/src/taquito-wallet.ts#L52)*

**Returns:** *Promise‹string›*

___

###  mapDelegateParamsToWalletParams

▸ **mapDelegateParamsToWalletParams**(`params`: WalletDelegateParams): *Promise‹RPCDelegateOperation›*

*Defined in [taquito-wallet.ts:65](https://github.com/madfish-solutions/thanoswallet-dapp/blob/6ebdacd/src/taquito-wallet.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | WalletDelegateParams |

**Returns:** *Promise‹RPCDelegateOperation›*

___

###  mapOriginateParamsToWalletParams

▸ **mapOriginateParamsToWalletParams**(`params`: WalletOriginateParams): *Promise‹RPCOriginationOperation›*

*Defined in [taquito-wallet.ts:61](https://github.com/madfish-solutions/thanoswallet-dapp/blob/6ebdacd/src/taquito-wallet.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | WalletOriginateParams |

**Returns:** *Promise‹RPCOriginationOperation›*

___

###  mapTransferParamsToWalletParams

▸ **mapTransferParamsToWalletParams**(`params`: WalletTransferParams): *Promise‹RPCTransferOperation›*

*Defined in [taquito-wallet.ts:57](https://github.com/madfish-solutions/thanoswallet-dapp/blob/6ebdacd/src/taquito-wallet.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | WalletTransferParams |

**Returns:** *Promise‹RPCTransferOperation›*

___

###  sendOperations

▸ **sendOperations**(`opParams`: any[]): *Promise‹string›*

*Defined in [taquito-wallet.ts:69](https://github.com/madfish-solutions/thanoswallet-dapp/blob/6ebdacd/src/taquito-wallet.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`opParams` | any[] |

**Returns:** *Promise‹string›*

___

###  toTezos

▸ **toTezos**(): *TezosToolkit‹›*

*Defined in [taquito-wallet.ts:35](https://github.com/madfish-solutions/thanoswallet-dapp/blob/6ebdacd/src/taquito-wallet.ts#L35)*

**Returns:** *TezosToolkit‹›*
