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
* [getCurrentPermission](thanoswallet.md#static-getcurrentpermission)
* [isAvailable](thanoswallet.md#static-isavailable)
* [onAvailabilityChange](thanoswallet.md#static-onavailabilitychange)
* [onPermissionChange](thanoswallet.md#static-onpermissionchange)

### Accessors

* [connected](thanoswallet.md#connected)

### Methods

* [broadcast](thanoswallet.md#broadcast)
* [connect](thanoswallet.md#connect)
* [getPKH](thanoswallet.md#getpkh)
* [mapDelegateParamsToWalletParams](thanoswallet.md#mapdelegateparamstowalletparams)
* [mapOriginateParamsToWalletParams](thanoswallet.md#maporiginateparamstowalletparams)
* [mapTransferParamsToWalletParams](thanoswallet.md#maptransferparamstowalletparams)
* [sendOperations](thanoswallet.md#sendoperations)
* [sign](thanoswallet.md#sign)
* [toTezos](thanoswallet.md#totezos)

## Constructors

###  constructor

\+ **new ThanosWallet**(`appName`: string, `existingPermission?`: [ThanosDAppPermission](../README.md#thanosdapppermission)): *[ThanosWallet](thanoswallet.md)*

*Defined in [taquito-wallet.ts:33](https://github.com/madfish-solutions/thanoswallet-dapp/blob/f20b824/src/taquito-wallet.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`appName` | string |
`existingPermission?` | [ThanosDAppPermission](../README.md#thanosdapppermission) |

**Returns:** *[ThanosWallet](thanoswallet.md)*

## Properties

### `Private` appName

• **appName**: *string*

*Defined in [taquito-wallet.ts:36](https://github.com/madfish-solutions/thanoswallet-dapp/blob/f20b824/src/taquito-wallet.ts#L36)*

___

### `Private` `Optional` pkh

• **pkh**? : *undefined | string*

*Defined in [taquito-wallet.ts:32](https://github.com/madfish-solutions/thanoswallet-dapp/blob/f20b824/src/taquito-wallet.ts#L32)*

___

### `Optional` rpc

• **rpc**? : *undefined | string*

*Defined in [taquito-wallet.ts:33](https://github.com/madfish-solutions/thanoswallet-dapp/blob/f20b824/src/taquito-wallet.ts#L33)*

___

### `Static` getCurrentPermission

▪ **getCurrentPermission**: *[getCurrentPermission](../README.md#getcurrentpermission)* = getCurrentPermission

*Defined in [taquito-wallet.ts:29](https://github.com/madfish-solutions/thanoswallet-dapp/blob/f20b824/src/taquito-wallet.ts#L29)*

___

### `Static` isAvailable

▪ **isAvailable**: *[isAvailable](../README.md#isavailable)* = isAvailable

*Defined in [taquito-wallet.ts:27](https://github.com/madfish-solutions/thanoswallet-dapp/blob/f20b824/src/taquito-wallet.ts#L27)*

___

### `Static` onAvailabilityChange

▪ **onAvailabilityChange**: *[onAvailabilityChange](../README.md#onavailabilitychange)* = onAvailabilityChange

*Defined in [taquito-wallet.ts:28](https://github.com/madfish-solutions/thanoswallet-dapp/blob/f20b824/src/taquito-wallet.ts#L28)*

___

### `Static` onPermissionChange

▪ **onPermissionChange**: *[onPermissionChange](../README.md#onpermissionchange)* = onPermissionChange

*Defined in [taquito-wallet.ts:30](https://github.com/madfish-solutions/thanoswallet-dapp/blob/f20b824/src/taquito-wallet.ts#L30)*

## Accessors

###  connected

• **get connected**(): *boolean*

*Defined in [taquito-wallet.ts:45](https://github.com/madfish-solutions/thanoswallet-dapp/blob/f20b824/src/taquito-wallet.ts#L45)*

**Returns:** *boolean*

## Methods

###  broadcast

▸ **broadcast**(`signedOpBytes`: string): *Promise‹string›*

*Defined in [taquito-wallet.ts:93](https://github.com/madfish-solutions/thanoswallet-dapp/blob/f20b824/src/taquito-wallet.ts#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`signedOpBytes` | string |

**Returns:** *Promise‹string›*

___

###  connect

▸ **connect**(`network`: [ThanosDAppNetwork](../README.md#thanosdappnetwork), `opts`: object): *Promise‹void›*

*Defined in [taquito-wallet.ts:56](https://github.com/madfish-solutions/thanoswallet-dapp/blob/f20b824/src/taquito-wallet.ts#L56)*

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

*Defined in [taquito-wallet.ts:66](https://github.com/madfish-solutions/thanoswallet-dapp/blob/f20b824/src/taquito-wallet.ts#L66)*

**Returns:** *Promise‹string›*

___

###  mapDelegateParamsToWalletParams

▸ **mapDelegateParamsToWalletParams**(`params`: WalletDelegateParams): *Promise‹RPCDelegateOperation›*

*Defined in [taquito-wallet.ts:79](https://github.com/madfish-solutions/thanoswallet-dapp/blob/f20b824/src/taquito-wallet.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | WalletDelegateParams |

**Returns:** *Promise‹RPCDelegateOperation›*

___

###  mapOriginateParamsToWalletParams

▸ **mapOriginateParamsToWalletParams**(`params`: WalletOriginateParams): *Promise‹RPCOriginationOperation›*

*Defined in [taquito-wallet.ts:75](https://github.com/madfish-solutions/thanoswallet-dapp/blob/f20b824/src/taquito-wallet.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | WalletOriginateParams |

**Returns:** *Promise‹RPCOriginationOperation›*

___

###  mapTransferParamsToWalletParams

▸ **mapTransferParamsToWalletParams**(`params`: WalletTransferParams): *Promise‹RPCTransferOperation›*

*Defined in [taquito-wallet.ts:71](https://github.com/madfish-solutions/thanoswallet-dapp/blob/f20b824/src/taquito-wallet.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | WalletTransferParams |

**Returns:** *Promise‹RPCTransferOperation›*

___

###  sendOperations

▸ **sendOperations**(`opParams`: any[]): *Promise‹string›*

*Defined in [taquito-wallet.ts:83](https://github.com/madfish-solutions/thanoswallet-dapp/blob/f20b824/src/taquito-wallet.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`opParams` | any[] |

**Returns:** *Promise‹string›*

___

###  sign

▸ **sign**(`payload`: string): *Promise‹string›*

*Defined in [taquito-wallet.ts:88](https://github.com/madfish-solutions/thanoswallet-dapp/blob/f20b824/src/taquito-wallet.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | string |

**Returns:** *Promise‹string›*

___

###  toTezos

▸ **toTezos**(): *TezosToolkit‹›*

*Defined in [taquito-wallet.ts:49](https://github.com/madfish-solutions/thanoswallet-dapp/blob/f20b824/src/taquito-wallet.ts#L49)*

**Returns:** *TezosToolkit‹›*
