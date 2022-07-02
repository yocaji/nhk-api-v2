# nhk-api-v2

[NHK番組表API](https://api-portal.nhk.or.jp/)のクライアントSDK(JavaScript)です

- API version: 2.0.0
- Package version: 1.1.4
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen


## インストール方法

```shell
npm i nhk-api-v2
```


## 動作確認のためのサンプルコード

1. `npm i nhl-api-v2`を実行してあなたのアプリケーションに`nhk-api-v2`を追加します
2. `example.js`を作成して以下のコードを入力します
    ```javascript
    const NhkApiV2 = require('nhk-api-v2')

    const client = new NhkApiV2.Client()
    const area = '020' // 地域ID
    const service = 'tv' // サービスID

    client.getProgramsNowOnAir(area, service).then(function (data) {
      console.log('青森で現在放送中のテレビ番組: ' + JSON.stringify(data))
    }, function (error) {
      console.error(error)
    })
    ```
3. [NHK番組表API](https://api-portal.nhk.or.jp/)で発行したAPI Keyを確認します
    ![image](https://user-images.githubusercontent.com/33394676/175258077-22333691-9b1b-43c3-95e5-b61c83d5bf22.png)
4. `example.js`の5行目にある`Your API Key`をあなたのAPIキーに書き換えます
5. `example.js`を実行します


## リクエストパラメータについて

- `area`, `service`, `genre`は[NHK番組表APIの仕様ページ](https://api-portal.nhk.or.jp/doc-request)をご確認ください
- `id`は`getPrograms`等で取得できる13文字の番組IDです


## Documentation for API Endpoints

All URIs are relative to *https://api.nhk.or.jp/v2/pg*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*NhkApiV2.ProgramsApi* | [**getProgramInfo**](docs/ProgramsApi.md#getProgramInfo) | **GET** /info/{area}/{service}/{id}.json | 番組情報を取得します
*NhkApiV2.ProgramsApi* | [**getPrograms**](docs/ProgramsApi.md#getPrograms) | **GET** /list/{area}/{service}/{date}.json | 番組リストを取得します
*NhkApiV2.ProgramsApi* | [**getProgramsByGenre**](docs/ProgramsApi.md#getProgramsByGenre) | **GET** /genre/{area}/{service}/{genre}/{date}.json | 指定されたジャンルの番組リストを取得します
*NhkApiV2.ProgramsApi* | [**getProgramsNowOnAir**](docs/ProgramsApi.md#getProgramsNowOnAir) | **GET** /now/{area}/{service}.json | 放送中の番組リストを取得します


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
