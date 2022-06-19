# nhk-api-v2

A JavaScript client for [NHK Program Guide API](https://api-portal.nhk.or.jp/).  
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.1.1
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

```shell
npm install nhk-api-v2
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
const NhkApiV2 = require('nhk-api-v2')

const defaultClient = NhkApiV2.ApiClient.instance
const api_key = defaultClient.authentications.api_key
api_key.apiKey = 'YOUR API KEY'

const api = new NhkApiV2.ProgramsApi()
const area = '020' // {Number} ID of broadcast area
const service = 'tv' // {String} ID of channel or channel group
const date = '2022-06-24' // {String} Date in YYYY-MM-DD format
const genre = '0000' // {String} Genre code defined by ARIB STD-B10
const id = '2022062532788' // {String} ID of channel

api.getPrograms(area, service, date).then(function (data) {
  console.log('API called successfully. Returned data: ' + data)
}, function (error) {
  console.error(error)
})
api.getProgramInfo(area, service, id).then(function (data) {
  console.log('API called successfully. Returned data: ' + data)
}, function (error) {
  console.error(error)
})
api.getProgramsByGenre(area, service, date, genre).then(function (data) {
  console.log('API called successfully. Returned data: ' + data)
}, function (error) {
  console.error(error)
})
api.getProgramsNowOnAir(area, service).then(function (data) {
  console.log('API called successfully. Returned data: ' + data)
}, function (error) {
  console.error(error)
})

```

## Documentation for API Endpoints

All URIs are relative to *https://api.nhk.or.jp/v2/pg*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*NhkApiV2.ProgramsApi* | [**getProgramInfo**](docs/ProgramsApi.md#getProgramInfo) | **GET** /info/{area}/{service}/{id}.json | 
*NhkApiV2.ProgramsApi* | [**getPrograms**](docs/ProgramsApi.md#getPrograms) | **GET** /list/{area}/{service}/{date}.json | 
*NhkApiV2.ProgramsApi* | [**getProgramsByGenre**](docs/ProgramsApi.md#getProgramsByGenre) | **GET** /genre/{area}/{service}/{genre}/{date}.json | 
*NhkApiV2.ProgramsApi* | [**getProgramsNowOnAir**](docs/ProgramsApi.md#getProgramsNowOnAir) | **GET** /now/{area}/{service}.json | 


## Documentation for Models

 - [NhkApiV2.Area](docs/Area.md)
 - [NhkApiV2.Description](docs/Description.md)
 - [NhkApiV2.DescriptionList](docs/DescriptionList.md)
 - [NhkApiV2.DescriptionListList](docs/DescriptionListList.md)
 - [NhkApiV2.Error](docs/Error.md)
 - [NhkApiV2.ErrorError](docs/ErrorError.md)
 - [NhkApiV2.Extra](docs/Extra.md)
 - [NhkApiV2.Link](docs/Link.md)
 - [NhkApiV2.List](docs/List.md)
 - [NhkApiV2.ListList](docs/ListList.md)
 - [NhkApiV2.Logo](docs/Logo.md)
 - [NhkApiV2.NowOnAir](docs/NowOnAir.md)
 - [NhkApiV2.NowOnAirList](docs/NowOnAirList.md)
 - [NhkApiV2.NowOnAirListNowonairList](docs/NowOnAirListNowonairList.md)
 - [NhkApiV2.Program](docs/Program.md)
 - [NhkApiV2.Service](docs/Service.md)


## Documentation for Authorization



### api_key


- **Type**: API key
- **API key parameter name**: key
- **Location**: URL query string

