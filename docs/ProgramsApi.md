# NhkApiV2.ProgramsApi

All URIs are relative to *https://api.nhk.or.jp/v2/pg*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProgramInfo**](ProgramsApi.md#getProgramInfo) | **GET** /info/{area}/{service}/{id}.json | 番組情報を取得します
[**getPrograms**](ProgramsApi.md#getPrograms) | **GET** /list/{area}/{service}/{date}.json | 番組リストを取得します
[**getProgramsByGenre**](ProgramsApi.md#getProgramsByGenre) | **GET** /genre/{area}/{service}/{genre}/{date}.json | 指定されたジャンルの番組リストを取得します
[**getProgramsNowOnAir**](ProgramsApi.md#getProgramsNowOnAir) | **GET** /now/{area}/{service}.json | 放送中の番組リストを取得します



## getProgramInfo

> DescriptionList getProgramInfo(area, service, id)

番組情報を取得します

番組情報を取得します。地域、チャンネル、対象の番組IDを指定する必要があります。

### Example

```javascript
import NhkApiV2 from 'nhk-api-v2';
let defaultClient = NhkApiV2.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new NhkApiV2.ProgramsApi();
let area = "area_example"; // String | ID of broadcast area
let service = "service_example"; // String | ID of channel or channel group
let id = "id_example"; // String | ID of program
apiInstance.getProgramInfo(area, service, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **area** | **String**| ID of broadcast area | 
 **service** | **String**| ID of channel or channel group | 
 **id** | **String**| ID of program | 

### Return type

[**DescriptionList**](DescriptionList.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPrograms

> Array getPrograms(area, service, date)

番組リストを取得します

番組リストを取得します。地域、チャンネル、日付を指定する必要があります。

### Example

```javascript
import NhkApiV2 from 'nhk-api-v2';
let defaultClient = NhkApiV2.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new NhkApiV2.ProgramsApi();
let area = "area_example"; // String | ID of broadcast area
let service = "service_example"; // String | ID of channel or channel group
let date = "date_example"; // String | Date in YYYY-MM-DD format
apiInstance.getPrograms(area, service, date).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **area** | **String**| ID of broadcast area | 
 **service** | **String**| ID of channel or channel group | 
 **date** | **String**| Date in YYYY-MM-DD format | 

### Return type

**Array**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProgramsByGenre

> Array getProgramsByGenre(area, service, date, genre)

指定されたジャンルの番組リストを取得します

番組リストを取得します。地域、チャンネル、日付、ジャンルを指定する必要があります。

### Example

```javascript
import NhkApiV2 from 'nhk-api-v2';
let defaultClient = NhkApiV2.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new NhkApiV2.ProgramsApi();
let area = "area_example"; // String | ID of broadcast area
let service = "service_example"; // String | ID of channel or channel group
let date = "date_example"; // String | Date in YYYY-MM-DD format
let genre = "genre_example"; // String | Genre code defined by ARIB STD-B10
apiInstance.getProgramsByGenre(area, service, date, genre).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **area** | **String**| ID of broadcast area | 
 **service** | **String**| ID of channel or channel group | 
 **date** | **String**| Date in YYYY-MM-DD format | 
 **genre** | **String**| Genre code defined by ARIB STD-B10 | 

### Return type

**Array**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProgramsNowOnAir

> NowOnAirList getProgramsNowOnAir(area, service)

放送中の番組リストを取得します

放送中の番組リストを取得します。地域、チャンネルを指定する必要があります。

### Example

```javascript
import NhkApiV2 from 'nhk-api-v2';
let defaultClient = NhkApiV2.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new NhkApiV2.ProgramsApi();
let area = "area_example"; // String | ID of broadcast area
let service = "service_example"; // String | ID of channel or channel group
apiInstance.getProgramsNowOnAir(area, service).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **area** | **String**| ID of broadcast area | 
 **service** | **String**| ID of channel or channel group | 

### Return type

[**NowOnAirList**](NowOnAirList.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

