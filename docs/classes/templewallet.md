[@temple-wallet/dapp](../README.md) › [TempleWallet](templewallet.md)

# Class: TempleWallet

## Hierarchy

* **TempleWallet**

## Implements

* WalletProvider

## Index

### Constructors

* [constructor](templewallet.md#constructor)

### Properties

* [appName](templewallet.md#private-appname)
* [permission](templewallet.md#permission)
* [getCurrentPermission](templewallet.md#static-getcurrentpermission)
* [isAvailable](templewallet.md#static-isavailable)
* [onAvailabilityChange](templewallet.md#static-onavailabilitychange)
* [onPermissionChange](templewallet.md#static-onpermissionchange)

### Accessors

* [connected](templewallet.md#connected)

### Methods

* [broadcast](templewallet.md#broadcast)
* [connect](templewallet.md#connect)
* [formatParameters](templewallet.md#private-formatparameters)
* [getPKH](templewallet.md#getpkh)
* [mapDelegateParamsToWalletParams](templewallet.md#mapdelegateparamstowalletparams)
* [mapOriginateParamsToWalletParams](templewallet.md#maporiginateparamstowalletparams)
* [mapTransferParamsToWalletParams](templewallet.md#maptransferparamstowalletparams)
* [reconnect](templewallet.md#reconnect)
* [removeDefaultParams](templewallet.md#private-removedefaultparams)
* [sendOperations](templewallet.md#sendoperations)
* [sign](templewallet.md#sign)
* [toTezos](templewallet.md#totezos)

## Constructors

###  constructor

\+ **new TempleWallet**(`appName`: string, `existingPermission?`: [TempleDAppPermission](../README.md#templedapppermission)): *[TempleWallet](templewallet.md)*

*Defined in [taquito-wallet.ts:32](https://github.com/madfish-solutions/templewallet-dapp/blob/e5aeb37/src/taquito-wallet.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`appName` | string |
`existingPermission?` | [TempleDAppPermission](../README.md#templedapppermission) |

**Returns:** *[TempleWallet](templewallet.md)*

## Properties

### `Private` appName

• **appName**: *string*

*Defined in [taquito-wallet.ts:35](https://github.com/madfish-solutions/templewallet-dapp/blob/e5aeb37/src/taquito-wallet.ts#L35)*

___

###  permission

• **permission**: *[TempleDAppPermission](../README.md#templedapppermission)* = null

*Defined in [taquito-wallet.ts:32](https://github.com/madfish-solutions/templewallet-dapp/blob/e5aeb37/src/taquito-wallet.ts#L32)*

___

### `Static` getCurrentPermission

▪ **getCurrentPermission**: *[getCurrentPermission](../README.md#getcurrentpermission)* = getCurrentPermission

*Defined in [taquito-wallet.ts:29](https://github.com/madfish-solutions/templewallet-dapp/blob/e5aeb37/src/taquito-wallet.ts#L29)*

___

### `Static` isAvailable

▪ **isAvailable**: *[isAvailable](../README.md#isavailable)* = isAvailable

*Defined in [taquito-wallet.ts:27](https://github.com/madfish-solutions/templewallet-dapp/blob/e5aeb37/src/taquito-wallet.ts#L27)*

___

### `Static` onAvailabilityChange

▪ **onAvailabilityChange**: *[onAvailabilityChange](../README.md#onavailabilitychange)* = onAvailabilityChange

*Defined in [taquito-wallet.ts:28](https://github.com/madfish-solutions/templewallet-dapp/blob/e5aeb37/src/taquito-wallet.ts#L28)*

___

### `Static` onPermissionChange

▪ **onPermissionChange**: *[onPermissionChange](../README.md#onpermissionchange)* = onPermissionChange

*Defined in [taquito-wallet.ts:30](https://github.com/madfish-solutions/templewallet-dapp/blob/e5aeb37/src/taquito-wallet.ts#L30)*

## Accessors

###  connected

• **get connected**(): *boolean*

*Defined in [taquito-wallet.ts:43](https://github.com/madfish-solutions/templewallet-dapp/blob/e5aeb37/src/taquito-wallet.ts#L43)*

**Returns:** *boolean*

## Methods

###  broadcast

▸ **broadcast**(`signedOpBytes`: string): *Promise‹string›*

*Defined in [taquito-wallet.ts:103](https://github.com/madfish-solutions/templewallet-dapp/blob/e5aeb37/src/taquito-wallet.ts#L103)*

**Parameters:**

Name | Type |
------ | ------ |
`signedOpBytes` | string |

**Returns:** *Promise‹string›*

___

###  connect

▸ **connect**(`network`: [TempleDAppNetwork](../README.md#templedappnetwork), `opts`: object): *Promise‹void›*

*Defined in [taquito-wallet.ts:54](https://github.com/madfish-solutions/templewallet-dapp/blob/e5aeb37/src/taquito-wallet.ts#L54)*

**Parameters:**

▪ **network**: *[TempleDAppNetwork](../README.md#templedappnetwork)*

▪`Default value`  **opts**: *object*= { forcePermission: false }

Name | Type | Default |
------ | ------ | ------ |
`forcePermission` | boolean | false |

**Returns:** *Promise‹void›*

___

### `Private` formatParameters

▸ **formatParameters**(`params`: any): *any*

*Defined in [taquito-wallet.ts:108](https://github.com/madfish-solutions/templewallet-dapp/blob/e5aeb37/src/taquito-wallet.ts#L108)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | any |

**Returns:** *any*

___

###  getPKH

▸ **getPKH**(): *Promise‹string›*

*Defined in [taquito-wallet.ts:67](https://github.com/madfish-solutions/templewallet-dapp/blob/e5aeb37/src/taquito-wallet.ts#L67)*

**Returns:** *Promise‹string›*

___

###  mapDelegateParamsToWalletParams

▸ **mapDelegateParamsToWalletParams**(`params`: WalletDelegateParams): *Promise‹any›*

*Defined in [taquito-wallet.ts:86](https://github.com/madfish-solutions/templewallet-dapp/blob/e5aeb37/src/taquito-wallet.ts#L86)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | WalletDelegateParams |

**Returns:** *Promise‹any›*

___

###  mapOriginateParamsToWalletParams

▸ **mapOriginateParamsToWalletParams**(`params`: WalletOriginateParams): *Promise‹any›*

*Defined in [taquito-wallet.ts:79](https://github.com/madfish-solutions/templewallet-dapp/blob/e5aeb37/src/taquito-wallet.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | WalletOriginateParams |

**Returns:** *Promise‹any›*

___

###  mapTransferParamsToWalletParams

▸ **mapTransferParamsToWalletParams**(`params`: WalletTransferParams): *Promise‹any›*

*Defined in [taquito-wallet.ts:72](https://github.com/madfish-solutions/templewallet-dapp/blob/e5aeb37/src/taquito-wallet.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | WalletTransferParams |

**Returns:** *Promise‹any›*

___

###  reconnect

▸ **reconnect**(`network`: [TempleDAppNetwork](../README.md#templedappnetwork)): *Promise‹void›*

*Defined in [taquito-wallet.ts:63](https://github.com/madfish-solutions/templewallet-dapp/blob/e5aeb37/src/taquito-wallet.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`network` | [TempleDAppNetwork](../README.md#templedappnetwork) |

**Returns:** *Promise‹void›*

___

### `Private` removeDefaultParams

▸ **removeDefaultParams**(`params`: WalletTransferParams | WalletOriginateParams | WalletDelegateParams, `operatedParams`: any): *any*

*Defined in [taquito-wallet.ts:121](https://github.com/madfish-solutions/templewallet-dapp/blob/e5aeb37/src/taquito-wallet.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | WalletTransferParams &#124; WalletOriginateParams &#124; WalletDelegateParams |
`operatedParams` | any |

**Returns:** *any*

___

###  sendOperations

▸ **sendOperations**(`opParams`: any[]): *Promise‹string›*

*Defined in [taquito-wallet.ts:93](https://github.com/madfish-solutions/templewallet-dapp/blob/e5aeb37/src/taquito-wallet.ts#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`opParams` | any[] |

**Returns:** *Promise‹string›*

___

###  sign

▸ **sign**(`payload`: string): *Promise‹string›*

*Defined in [taquito-wallet.ts:98](https://github.com/madfish-solutions/templewallet-dapp/blob/e5aeb37/src/taquito-wallet.ts#L98)*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | string |

**Returns:** *Promise‹string›*

___

###  toTezos

▸ **toTezos**(): *TezosToolkit‹›*

*Defined in [taquito-wallet.ts:47](https://github.com/madfish-solutions/templewallet-dapp/blob/e5aeb37/src/taquito-wallet.ts#L47)*

**Returns:** *TezosToolkit‹›*
