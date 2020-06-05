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

* [ThanosDAppMessageBase](interfaces/thanosdappmessagebase.md)
* [ThanosDAppMetadata](interfaces/thanosdappmetadata.md)
* [ThanosDAppOperationRequest](interfaces/thanosdappoperationrequest.md)
* [ThanosDAppOperationResponse](interfaces/thanosdappoperationresponse.md)
* [ThanosDAppPermissionRequest](interfaces/thanosdapppermissionrequest.md)
* [ThanosDAppPermissionResponse](interfaces/thanosdapppermissionresponse.md)
* [ThanosPageMessage](interfaces/thanospagemessage.md)

### Type aliases

* [ThanosDAppMessage](README.md#thanosdappmessage)
* [ThanosDAppNetwork](README.md#thanosdappnetwork)
* [ThanosDAppRequest](README.md#thanosdapprequest)
* [ThanosDAppResponse](README.md#thanosdappresponse)

### Functions

* [assertConnected](README.md#assertconnected)
* [assertResponse](README.md#assertresponse)
* [createError](README.md#createerror)
* [formatOpParams](README.md#formatopparams)
* [isAvailable](README.md#isavailable)
* [onAvailabilityChange](README.md#onavailabilitychange)
* [request](README.md#request)
* [requestOperation](README.md#requestoperation)
* [requestPermission](README.md#requestpermission)
* [send](README.md#send)

## Type aliases

###  ThanosDAppMessage

Ƭ **ThanosDAppMessage**: *[ThanosDAppRequest](README.md#thanosdapprequest) | [ThanosDAppResponse](README.md#thanosdappresponse)*

*Defined in [types.ts:1](https://github.com/madfish-solutions/thanoswallet-dapp/blob/6ebdacd/src/types.ts#L1)*

___

###  ThanosDAppNetwork

Ƭ **ThanosDAppNetwork**: *"mainnet" | "carthagenet"*

*Defined in [types.ts:63](https://github.com/madfish-solutions/thanoswallet-dapp/blob/6ebdacd/src/types.ts#L63)*

Misc

___

###  ThanosDAppRequest

Ƭ **ThanosDAppRequest**: *[ThanosDAppPermissionRequest](interfaces/thanosdapppermissionrequest.md) | [ThanosDAppOperationRequest](interfaces/thanosdappoperationrequest.md)*

*Defined in [types.ts:3](https://github.com/madfish-solutions/thanoswallet-dapp/blob/6ebdacd/src/types.ts#L3)*

___

###  ThanosDAppResponse

Ƭ **ThanosDAppResponse**: *[ThanosDAppPermissionResponse](interfaces/thanosdapppermissionresponse.md) | [ThanosDAppOperationResponse](interfaces/thanosdappoperationresponse.md)*

*Defined in [types.ts:7](https://github.com/madfish-solutions/thanoswallet-dapp/blob/6ebdacd/src/types.ts#L7)*

## Functions

###  assertConnected

▸ **assertConnected**(`pkh?`: undefined | string): *asserts pkh*

*Defined in [taquito-wallet.ts:81](https://github.com/madfish-solutions/thanoswallet-dapp/blob/6ebdacd/src/taquito-wallet.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`pkh?` | undefined &#124; string |

**Returns:** *asserts pkh*

___

###  assertResponse

▸ **assertResponse**(`condition`: any): *asserts condition*

*Defined in [client.ts:135](https://github.com/madfish-solutions/thanoswallet-dapp/blob/6ebdacd/src/client.ts#L135)*

**Parameters:**

Name | Type |
------ | ------ |
`condition` | any |

**Returns:** *asserts condition*

___

###  createError

▸ **createError**(`payload`: any): *[ThanosWalletError](classes/thanoswalleterror.md)‹›*

*Defined in [client.ts:116](https://github.com/madfish-solutions/thanoswallet-dapp/blob/6ebdacd/src/client.ts#L116)*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | any |

**Returns:** *[ThanosWalletError](classes/thanoswalleterror.md)‹›*

___

###  formatOpParams

▸ **formatOpParams**(`op`: any): *any*

*Defined in [taquito-wallet.ts:87](https://github.com/madfish-solutions/thanoswallet-dapp/blob/6ebdacd/src/taquito-wallet.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`op` | any |

**Returns:** *any*

___

###  isAvailable

▸ **isAvailable**(): *Promise‹boolean›*

*Defined in [client.ts:13](https://github.com/madfish-solutions/thanoswallet-dapp/blob/6ebdacd/src/client.ts#L13)*

**Returns:** *Promise‹boolean›*

___

###  onAvailabilityChange

▸ **onAvailabilityChange**(`callback`: function): *(Anonymous function)*

*Defined in [client.ts:40](https://github.com/madfish-solutions/thanoswallet-dapp/blob/6ebdacd/src/client.ts#L40)*

**Parameters:**

▪ **callback**: *function*

▸ (`available`: boolean): *void*

**Parameters:**

Name | Type |
------ | ------ |
`available` | boolean |

**Returns:** *(Anonymous function)*

___

###  request

▸ **request**(`payload`: [ThanosDAppRequest](README.md#thanosdapprequest)): *Promise‹[ThanosDAppPermissionResponse](interfaces/thanosdapppermissionresponse.md) | [ThanosDAppOperationResponse](interfaces/thanosdappoperationresponse.md)›*

*Defined in [client.ts:85](https://github.com/madfish-solutions/thanoswallet-dapp/blob/6ebdacd/src/client.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | [ThanosDAppRequest](README.md#thanosdapprequest) |

**Returns:** *Promise‹[ThanosDAppPermissionResponse](interfaces/thanosdapppermissionresponse.md) | [ThanosDAppOperationResponse](interfaces/thanosdappoperationresponse.md)›*

___

###  requestOperation

▸ **requestOperation**(`sourcePkh`: string, `opParams`: any): *Promise‹string›*

*Defined in [client.ts:75](https://github.com/madfish-solutions/thanoswallet-dapp/blob/6ebdacd/src/client.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`sourcePkh` | string |
`opParams` | any |

**Returns:** *Promise‹string›*

___

###  requestPermission

▸ **requestPermission**(`network`: [ThanosDAppNetwork](README.md#thanosdappnetwork), `appMeta`: [ThanosDAppMetadata](interfaces/thanosdappmetadata.md), `force`: boolean): *Promise‹object›*

*Defined in [client.ts:60](https://github.com/madfish-solutions/thanoswallet-dapp/blob/6ebdacd/src/client.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`network` | [ThanosDAppNetwork](README.md#thanosdappnetwork) |
`appMeta` | [ThanosDAppMetadata](interfaces/thanosdappmetadata.md) |
`force` | boolean |

**Returns:** *Promise‹object›*

___

###  send

▸ **send**(`msg`: [ThanosPageMessage](interfaces/thanospagemessage.md)): *void*

*Defined in [client.ts:141](https://github.com/madfish-solutions/thanoswallet-dapp/blob/6ebdacd/src/client.ts#L141)*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | [ThanosPageMessage](interfaces/thanospagemessage.md) |

**Returns:** *void*
