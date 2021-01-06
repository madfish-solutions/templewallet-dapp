[@thanos-wallet/dapp](README.md)

# @thanos-wallet/dapp

## Index

### Enumerations

* [ThanosDAppErrorType](enums/thanosdapperrortype.md)
* [ThanosDAppMessageType](enums/thanosdappmessagetype.md)
* [ThanosPageMessageType](enums/thanospagemessagetype.md)

### Classes

* [InvalidParamsThanosWalletError](classes/invalidparamsthanoswalleterror.md)
* [NotConnectedThanosWalletError](classes/notconnectedthanoswalleterror.md)
* [NotFoundThanosWalletError](classes/notfoundthanoswalleterror.md)
* [NotGrantedThanosWalletError](classes/notgrantedthanoswalleterror.md)
* [ThanosWallet](classes/thanoswallet.md)
* [ThanosWalletError](classes/thanoswalleterror.md)

### Interfaces

* [ThanosDAppBroadcastRequest](interfaces/thanosdappbroadcastrequest.md)
* [ThanosDAppBroadcastResponse](interfaces/thanosdappbroadcastresponse.md)
* [ThanosDAppGetCurrentPermissionRequest](interfaces/thanosdappgetcurrentpermissionrequest.md)
* [ThanosDAppGetCurrentPermissionResponse](interfaces/thanosdappgetcurrentpermissionresponse.md)
* [ThanosDAppMessageBase](interfaces/thanosdappmessagebase.md)
* [ThanosDAppMetadata](interfaces/thanosdappmetadata.md)
* [ThanosDAppOperationRequest](interfaces/thanosdappoperationrequest.md)
* [ThanosDAppOperationResponse](interfaces/thanosdappoperationresponse.md)
* [ThanosDAppPermissionRequest](interfaces/thanosdapppermissionrequest.md)
* [ThanosDAppPermissionResponse](interfaces/thanosdapppermissionresponse.md)
* [ThanosDAppSignRequest](interfaces/thanosdappsignrequest.md)
* [ThanosDAppSignResponse](interfaces/thanosdappsignresponse.md)
* [ThanosPageMessage](interfaces/thanospagemessage.md)

### Type aliases

* [ThanosDAppMessage](README.md#thanosdappmessage)
* [ThanosDAppNetwork](README.md#thanosdappnetwork)
* [ThanosDAppPermission](README.md#thanosdapppermission)
* [ThanosDAppRequest](README.md#thanosdapprequest)
* [ThanosDAppResponse](README.md#thanosdappresponse)

### Functions

* [assertConnected](README.md#assertconnected)
* [assertResponse](README.md#assertresponse)
* [createError](README.md#createerror)
* [formatOpParams](README.md#formatopparams)
* [getCurrentPermission](README.md#getcurrentpermission)
* [isAvailable](README.md#isavailable)
* [onAvailabilityChange](README.md#onavailabilitychange)
* [onPermissionChange](README.md#onpermissionchange)
* [permissionsAreEqual](README.md#permissionsareequal)
* [request](README.md#request)
* [requestBroadcast](README.md#requestbroadcast)
* [requestOperation](README.md#requestoperation)
* [requestPermission](README.md#requestpermission)
* [requestSign](README.md#requestsign)
* [send](README.md#send)

## Type aliases

###  ThanosDAppMessage

Ƭ **ThanosDAppMessage**: *[ThanosDAppRequest](README.md#thanosdapprequest) | [ThanosDAppResponse](README.md#thanosdappresponse)*

*Defined in [types.ts:1](https://github.com/madfish-solutions/thanoswallet-dapp/blob/1e90ae9/src/types.ts#L1)*

___

###  ThanosDAppNetwork

Ƭ **ThanosDAppNetwork**: *"mainnet" | "delphinet" | "carthagenet" | "sandbox" | object*

*Defined in [types.ts:114](https://github.com/madfish-solutions/thanoswallet-dapp/blob/1e90ae9/src/types.ts#L114)*

___

###  ThanosDAppPermission

Ƭ **ThanosDAppPermission**: *object | null*

*Defined in [types.ts:108](https://github.com/madfish-solutions/thanoswallet-dapp/blob/1e90ae9/src/types.ts#L108)*

Misc

___

###  ThanosDAppRequest

Ƭ **ThanosDAppRequest**: *[ThanosDAppGetCurrentPermissionRequest](interfaces/thanosdappgetcurrentpermissionrequest.md) | [ThanosDAppPermissionRequest](interfaces/thanosdapppermissionrequest.md) | [ThanosDAppOperationRequest](interfaces/thanosdappoperationrequest.md) | [ThanosDAppSignRequest](interfaces/thanosdappsignrequest.md) | [ThanosDAppBroadcastRequest](interfaces/thanosdappbroadcastrequest.md)*

*Defined in [types.ts:3](https://github.com/madfish-solutions/thanoswallet-dapp/blob/1e90ae9/src/types.ts#L3)*

___

###  ThanosDAppResponse

Ƭ **ThanosDAppResponse**: *[ThanosDAppGetCurrentPermissionResponse](interfaces/thanosdappgetcurrentpermissionresponse.md) | [ThanosDAppPermissionResponse](interfaces/thanosdapppermissionresponse.md) | [ThanosDAppOperationResponse](interfaces/thanosdappoperationresponse.md) | [ThanosDAppSignResponse](interfaces/thanosdappsignresponse.md) | [ThanosDAppBroadcastResponse](interfaces/thanosdappbroadcastresponse.md)*

*Defined in [types.ts:10](https://github.com/madfish-solutions/thanoswallet-dapp/blob/1e90ae9/src/types.ts#L10)*

## Functions

###  assertConnected

▸ **assertConnected**(`perm`: [ThanosDAppPermission](README.md#thanosdapppermission)): *asserts perm*

*Defined in [taquito-wallet.ts:106](https://github.com/madfish-solutions/thanoswallet-dapp/blob/1e90ae9/src/taquito-wallet.ts#L106)*

**Parameters:**

Name | Type |
------ | ------ |
`perm` | [ThanosDAppPermission](README.md#thanosdapppermission) |

**Returns:** *asserts perm*

___

###  assertResponse

▸ **assertResponse**(`condition`: any): *asserts condition*

*Defined in [client.ts:197](https://github.com/madfish-solutions/thanoswallet-dapp/blob/1e90ae9/src/client.ts#L197)*

**Parameters:**

Name | Type |
------ | ------ |
`condition` | any |

**Returns:** *asserts condition*

___

###  createError

▸ **createError**(`payload`: any): *[ThanosWalletError](classes/thanoswalleterror.md)‹›*

*Defined in [client.ts:178](https://github.com/madfish-solutions/thanoswallet-dapp/blob/1e90ae9/src/client.ts#L178)*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | any |

**Returns:** *[ThanosWalletError](classes/thanoswalleterror.md)‹›*

___

###  formatOpParams

▸ **formatOpParams**(`op`: any): *any*

*Defined in [taquito-wallet.ts:112](https://github.com/madfish-solutions/thanoswallet-dapp/blob/1e90ae9/src/taquito-wallet.ts#L112)*

**Parameters:**

Name | Type |
------ | ------ |
`op` | any |

**Returns:** *any*

___

###  getCurrentPermission

▸ **getCurrentPermission**(): *Promise‹null | object›*

*Defined in [client.ts:81](https://github.com/madfish-solutions/thanoswallet-dapp/blob/1e90ae9/src/client.ts#L81)*

**Returns:** *Promise‹null | object›*

___

###  isAvailable

▸ **isAvailable**(): *Promise‹boolean›*

*Defined in [client.ts:14](https://github.com/madfish-solutions/thanoswallet-dapp/blob/1e90ae9/src/client.ts#L14)*

**Returns:** *Promise‹boolean›*

___

###  onAvailabilityChange

▸ **onAvailabilityChange**(`callback`: function): *(Anonymous function)*

*Defined in [client.ts:41](https://github.com/madfish-solutions/thanoswallet-dapp/blob/1e90ae9/src/client.ts#L41)*

**Parameters:**

▪ **callback**: *function*

▸ (`available`: boolean): *void*

**Parameters:**

Name | Type |
------ | ------ |
`available` | boolean |

**Returns:** *(Anonymous function)*

___

###  onPermissionChange

▸ **onPermissionChange**(`callback`: function): *(Anonymous function)*

*Defined in [client.ts:61](https://github.com/madfish-solutions/thanoswallet-dapp/blob/1e90ae9/src/client.ts#L61)*

**Parameters:**

▪ **callback**: *function*

▸ (`permission`: [ThanosDAppPermission](README.md#thanosdapppermission)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`permission` | [ThanosDAppPermission](README.md#thanosdapppermission) |

**Returns:** *(Anonymous function)*

___

###  permissionsAreEqual

▸ **permissionsAreEqual**(`aPerm`: [ThanosDAppPermission](README.md#thanosdapppermission), `bPerm`: [ThanosDAppPermission](README.md#thanosdapppermission)): *boolean*

*Defined in [client.ts:170](https://github.com/madfish-solutions/thanoswallet-dapp/blob/1e90ae9/src/client.ts#L170)*

**Parameters:**

Name | Type |
------ | ------ |
`aPerm` | [ThanosDAppPermission](README.md#thanosdapppermission) |
`bPerm` | [ThanosDAppPermission](README.md#thanosdapppermission) |

**Returns:** *boolean*

___

###  request

▸ **request**(`payload`: [ThanosDAppRequest](README.md#thanosdapprequest)): *Promise‹[ThanosDAppGetCurrentPermissionResponse](interfaces/thanosdappgetcurrentpermissionresponse.md) | [ThanosDAppPermissionResponse](interfaces/thanosdapppermissionresponse.md) | [ThanosDAppOperationResponse](interfaces/thanosdappoperationresponse.md) | [ThanosDAppSignResponse](interfaces/thanosdappsignresponse.md) | [ThanosDAppBroadcastResponse](interfaces/thanosdappbroadcastresponse.md)›*

*Defined in [client.ts:139](https://github.com/madfish-solutions/thanoswallet-dapp/blob/1e90ae9/src/client.ts#L139)*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | [ThanosDAppRequest](README.md#thanosdapprequest) |

**Returns:** *Promise‹[ThanosDAppGetCurrentPermissionResponse](interfaces/thanosdappgetcurrentpermissionresponse.md) | [ThanosDAppPermissionResponse](interfaces/thanosdapppermissionresponse.md) | [ThanosDAppOperationResponse](interfaces/thanosdappoperationresponse.md) | [ThanosDAppSignResponse](interfaces/thanosdappsignresponse.md) | [ThanosDAppBroadcastResponse](interfaces/thanosdappbroadcastresponse.md)›*

___

###  requestBroadcast

▸ **requestBroadcast**(`signedOpBytes`: string): *Promise‹string›*

*Defined in [client.ts:130](https://github.com/madfish-solutions/thanoswallet-dapp/blob/1e90ae9/src/client.ts#L130)*

**Parameters:**

Name | Type |
------ | ------ |
`signedOpBytes` | string |

**Returns:** *Promise‹string›*

___

###  requestOperation

▸ **requestOperation**(`sourcePkh`: string, `opParams`: any): *Promise‹string›*

*Defined in [client.ts:110](https://github.com/madfish-solutions/thanoswallet-dapp/blob/1e90ae9/src/client.ts#L110)*

**Parameters:**

Name | Type |
------ | ------ |
`sourcePkh` | string |
`opParams` | any |

**Returns:** *Promise‹string›*

___

###  requestPermission

▸ **requestPermission**(`network`: [ThanosDAppNetwork](README.md#thanosdappnetwork), `appMeta`: [ThanosDAppMetadata](interfaces/thanosdappmetadata.md), `force`: boolean): *Promise‹object›*

*Defined in [client.ts:91](https://github.com/madfish-solutions/thanoswallet-dapp/blob/1e90ae9/src/client.ts#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`network` | [ThanosDAppNetwork](README.md#thanosdappnetwork) |
`appMeta` | [ThanosDAppMetadata](interfaces/thanosdappmetadata.md) |
`force` | boolean |

**Returns:** *Promise‹object›*

___

###  requestSign

▸ **requestSign**(`sourcePkh`: string, `payload`: string): *Promise‹string›*

*Defined in [client.ts:120](https://github.com/madfish-solutions/thanoswallet-dapp/blob/1e90ae9/src/client.ts#L120)*

**Parameters:**

Name | Type |
------ | ------ |
`sourcePkh` | string |
`payload` | string |

**Returns:** *Promise‹string›*

___

###  send

▸ **send**(`msg`: [ThanosPageMessage](interfaces/thanospagemessage.md)): *void*

*Defined in [client.ts:203](https://github.com/madfish-solutions/thanoswallet-dapp/blob/1e90ae9/src/client.ts#L203)*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | [ThanosPageMessage](interfaces/thanospagemessage.md) |

**Returns:** *void*
