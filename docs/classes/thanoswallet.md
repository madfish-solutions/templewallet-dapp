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
* [permission](thanoswallet.md#permission)
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
* [reconnect](thanoswallet.md#reconnect)
* [sendOperations](thanoswallet.md#sendoperations)
* [sign](thanoswallet.md#sign)
* [toTezos](thanoswallet.md#totezos)

## Constructors

###  constructor

\+ **new ThanosWallet**(`appName`: string, `existingPermission?`: [ThanosDAppPermission](../README.md#thanosdapppermission)): *[ThanosWallet](thanoswallet.md)*

*Defined in [taquito-wallet.ts:32](https://github.com/madfish-solutions/thanoswallet-dapp/blob/8b5bfb8/src/taquito-wallet.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`appName` | string |
`existingPermission?` | [ThanosDAppPermission](../README.md#thanosdapppermission) |

**Returns:** *[ThanosWallet](thanoswallet.md)*

## Properties

### `Private` appName

• **appName**: *string*

*Defined in [taquito-wallet.ts:35](https://github.com/madfish-solutions/thanoswallet-dapp/blob/8b5bfb8/src/taquito-wallet.ts#L35)*

___

###  permission

• **permission**: *[ThanosDAppPermission](../README.md#thanosdapppermission)* = null

*Defined in [taquito-wallet.ts:32](https://github.com/madfish-solutions/thanoswallet-dapp/blob/8b5bfb8/src/taquito-wallet.ts#L32)*

___

### `Static` getCurrentPermission

▪ **getCurrentPermission**: *[getCurrentPermission](../README.md#getcurrentpermission)* = getCurrentPermission

*Defined in [taquito-wallet.ts:29](https://github.com/madfish-solutions/thanoswallet-dapp/blob/8b5bfb8/src/taquito-wallet.ts#L29)*

___

### `Static` isAvailable

▪ **isAvailable**: *[isAvailable](../README.md#isavailable)* = isAvailable

*Defined in [taquito-wallet.ts:27](https://github.com/madfish-solutions/thanoswallet-dapp/blob/8b5bfb8/src/taquito-wallet.ts#L27)*

___

### `Static` onAvailabilityChange

▪ **onAvailabilityChange**: *[onAvailabilityChange](../README.md#onavailabilitychange)* = onAvailabilityChange

*Defined in [taquito-wallet.ts:28](https://github.com/madfish-solutions/thanoswallet-dapp/blob/8b5bfb8/src/taquito-wallet.ts#L28)*

___

### `Static` onPermissionChange

▪ **onPermissionChange**: *[onPermissionChange](../README.md#onpermissionchange)* = onPermissionChange

*Defined in [taquito-wallet.ts:30](https://github.com/madfish-solutions/thanoswallet-dapp/blob/8b5bfb8/src/taquito-wallet.ts#L30)*

## Accessors

###  connected

• **get connected**(): *boolean*

*Defined in [taquito-wallet.ts:43](https://github.com/madfish-solutions/thanoswallet-dapp/blob/8b5bfb8/src/taquito-wallet.ts#L43)*

**Returns:** *boolean*

## Methods

###  broadcast

▸ **broadcast**(`signedOpBytes`: string): *Promise‹string›*

*Defined in [taquito-wallet.ts:94](https://github.com/madfish-solutions/thanoswallet-dapp/blob/8b5bfb8/src/taquito-wallet.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`signedOpBytes` | string |

**Returns:** *Promise‹string›*

___

###  connect

▸ **connect**(`network`: [ThanosDAppNetwork](../README.md#thanosdappnetwork), `opts`: object): *Promise‹void›*

*Defined in [taquito-wallet.ts:54](https://github.com/madfish-solutions/thanoswallet-dapp/blob/8b5bfb8/src/taquito-wallet.ts#L54)*

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

*Defined in [taquito-wallet.ts:67](https://github.com/madfish-solutions/thanoswallet-dapp/blob/8b5bfb8/src/taquito-wallet.ts#L67)*

**Returns:** *Promise‹string›*

___

###  mapDelegateParamsToWalletParams

▸ **mapDelegateParamsToWalletParams**(`params`: WalletDelegateParams): *Promise‹RPCDelegateOperation›*

*Defined in [taquito-wallet.ts:80](https://github.com/madfish-solutions/thanoswallet-dapp/blob/8b5bfb8/src/taquito-wallet.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | WalletDelegateParams |

**Returns:** *Promise‹RPCDelegateOperation›*

___

###  mapOriginateParamsToWalletParams

▸ **mapOriginateParamsToWalletParams**(`params`: WalletOriginateParams): *Promise‹RPCOriginationOperation›*

*Defined in [taquito-wallet.ts:76](https://github.com/madfish-solutions/thanoswallet-dapp/blob/8b5bfb8/src/taquito-wallet.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | WalletOriginateParams |

**Returns:** *Promise‹RPCOriginationOperation›*

___

###  mapTransferParamsToWalletParams

▸ **mapTransferParamsToWalletParams**(`params`: WalletTransferParams): *Promise‹RPCTransferOperation›*

*Defined in [taquito-wallet.ts:72](https://github.com/madfish-solutions/thanoswallet-dapp/blob/8b5bfb8/src/taquito-wallet.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | WalletTransferParams |

**Returns:** *Promise‹RPCTransferOperation›*

___

###  reconnect

▸ **reconnect**(`network`: [ThanosDAppNetwork](../README.md#thanosdappnetwork)): *Promise‹void›*

*Defined in [taquito-wallet.ts:63](https://github.com/madfish-solutions/thanoswallet-dapp/blob/8b5bfb8/src/taquito-wallet.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`network` | [ThanosDAppNetwork](../README.md#thanosdappnetwork) |

**Returns:** *Promise‹void›*

___

###  sendOperations

▸ **sendOperations**(`opParams`: any[]): *Promise‹string›*

*Defined in [taquito-wallet.ts:84](https://github.com/madfish-solutions/thanoswallet-dapp/blob/8b5bfb8/src/taquito-wallet.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`opParams` | any[] |

**Returns:** *Promise‹string›*

___

###  sign

▸ **sign**(`payload`: string): *Promise‹string›*

*Defined in [taquito-wallet.ts:89](https://github.com/madfish-solutions/thanoswallet-dapp/blob/8b5bfb8/src/taquito-wallet.ts#L89)*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | string |

**Returns:** *Promise‹string›*

___

###  toTezos

▸ **toTezos**(): *TezosToolkit‹›*

*Defined in [taquito-wallet.ts:47](https://github.com/madfish-solutions/thanoswallet-dapp/blob/8b5bfb8/src/taquito-wallet.ts#L47)*

**Returns:** *TezosToolkit‹›*
