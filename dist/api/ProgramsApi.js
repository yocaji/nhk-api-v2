"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DescriptionList = _interopRequireDefault(require("../model/DescriptionList"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _NowOnAirList = _interopRequireDefault(require("../model/NowOnAirList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Programs service.
* @module api/ProgramsApi
* @version 1.1.8
*/
var ProgramsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ProgramsApi. 
  * @alias module:api/ProgramsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ProgramsApi(apiClient) {
    _classCallCheck(this, ProgramsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * 番組情報を取得します
   * 番組情報を取得します。地域、チャンネル、対象の番組IDを指定する必要があります。
   * @param {String} area ID of broadcast area
   * @param {String} service ID of channel or channel group
   * @param {String} id ID of program
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DescriptionList} and HTTP response
   */


  _createClass(ProgramsApi, [{
    key: "getProgramInfoWithHttpInfo",
    value: function getProgramInfoWithHttpInfo(area, service, id) {
      var postBody = null; // verify the required parameter 'area' is set

      if (area === undefined || area === null) {
        throw new _Error["default"]("Missing the required parameter 'area' when calling getProgramInfo");
      } // verify the required parameter 'service' is set


      if (service === undefined || service === null) {
        throw new _Error["default"]("Missing the required parameter 'service' when calling getProgramInfo");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling getProgramInfo");
      }

      var pathParams = {
        'area': area,
        'service': service,
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _DescriptionList["default"];
      return this.apiClient.callApi('/info/{area}/{service}/{id}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * 番組情報を取得します
     * 番組情報を取得します。地域、チャンネル、対象の番組IDを指定する必要があります。
     * @param {String} area ID of broadcast area
     * @param {String} service ID of channel or channel group
     * @param {String} id ID of program
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DescriptionList}
     */

  }, {
    key: "getProgramInfo",
    value: function getProgramInfo(area, service, id) {
      return this.getProgramInfoWithHttpInfo(area, service, id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * 番組リストを取得します
     * 番組リストを取得します。地域、チャンネル、日付を指定する必要があります。
     * @param {String} area ID of broadcast area
     * @param {String} service ID of channel or channel group
     * @param {String} date Date in YYYY-MM-DD format
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array} and HTTP response
     */

  }, {
    key: "getProgramsWithHttpInfo",
    value: function getProgramsWithHttpInfo(area, service, date) {
      var postBody = null; // verify the required parameter 'area' is set

      if (area === undefined || area === null) {
        throw new _Error["default"]("Missing the required parameter 'area' when calling getPrograms");
      } // verify the required parameter 'service' is set


      if (service === undefined || service === null) {
        throw new _Error["default"]("Missing the required parameter 'service' when calling getPrograms");
      } // verify the required parameter 'date' is set


      if (date === undefined || date === null) {
        throw new _Error["default"]("Missing the required parameter 'date' when calling getPrograms");
      }

      var pathParams = {
        'area': area,
        'service': service,
        'date': date
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Array;
      return this.apiClient.callApi('/list/{area}/{service}/{date}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * 番組リストを取得します
     * 番組リストを取得します。地域、チャンネル、日付を指定する必要があります。
     * @param {String} area ID of broadcast area
     * @param {String} service ID of channel or channel group
     * @param {String} date Date in YYYY-MM-DD format
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array}
     */

  }, {
    key: "getPrograms",
    value: function getPrograms(area, service, date) {
      return this.getProgramsWithHttpInfo(area, service, date).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * 指定されたジャンルの番組リストを取得します
     * 番組リストを取得します。地域、チャンネル、日付、ジャンルを指定する必要があります。
     * @param {String} area ID of broadcast area
     * @param {String} service ID of channel or channel group
     * @param {String} date Date in YYYY-MM-DD format
     * @param {String} genre Genre code defined by ARIB STD-B10
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array} and HTTP response
     */

  }, {
    key: "getProgramsByGenreWithHttpInfo",
    value: function getProgramsByGenreWithHttpInfo(area, service, date, genre) {
      var postBody = null; // verify the required parameter 'area' is set

      if (area === undefined || area === null) {
        throw new _Error["default"]("Missing the required parameter 'area' when calling getProgramsByGenre");
      } // verify the required parameter 'service' is set


      if (service === undefined || service === null) {
        throw new _Error["default"]("Missing the required parameter 'service' when calling getProgramsByGenre");
      } // verify the required parameter 'date' is set


      if (date === undefined || date === null) {
        throw new _Error["default"]("Missing the required parameter 'date' when calling getProgramsByGenre");
      } // verify the required parameter 'genre' is set


      if (genre === undefined || genre === null) {
        throw new _Error["default"]("Missing the required parameter 'genre' when calling getProgramsByGenre");
      }

      var pathParams = {
        'area': area,
        'service': service,
        'date': date,
        'genre': genre
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Array;
      return this.apiClient.callApi('/genre/{area}/{service}/{genre}/{date}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * 指定されたジャンルの番組リストを取得します
     * 番組リストを取得します。地域、チャンネル、日付、ジャンルを指定する必要があります。
     * @param {String} area ID of broadcast area
     * @param {String} service ID of channel or channel group
     * @param {String} date Date in YYYY-MM-DD format
     * @param {String} genre Genre code defined by ARIB STD-B10
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array}
     */

  }, {
    key: "getProgramsByGenre",
    value: function getProgramsByGenre(area, service, date, genre) {
      return this.getProgramsByGenreWithHttpInfo(area, service, date, genre).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * 放送中の番組リストを取得します
     * 放送中の番組リストを取得します。地域、チャンネルを指定する必要があります。
     * @param {String} area ID of broadcast area
     * @param {String} service ID of channel or channel group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NowOnAirList} and HTTP response
     */

  }, {
    key: "getProgramsNowOnAirWithHttpInfo",
    value: function getProgramsNowOnAirWithHttpInfo(area, service) {
      var postBody = null; // verify the required parameter 'area' is set

      if (area === undefined || area === null) {
        throw new _Error["default"]("Missing the required parameter 'area' when calling getProgramsNowOnAir");
      } // verify the required parameter 'service' is set


      if (service === undefined || service === null) {
        throw new _Error["default"]("Missing the required parameter 'service' when calling getProgramsNowOnAir");
      }

      var pathParams = {
        'area': area,
        'service': service
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _NowOnAirList["default"];
      return this.apiClient.callApi('/now/{area}/{service}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * 放送中の番組リストを取得します
     * 放送中の番組リストを取得します。地域、チャンネルを指定する必要があります。
     * @param {String} area ID of broadcast area
     * @param {String} service ID of channel or channel group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NowOnAirList}
     */

  }, {
    key: "getProgramsNowOnAir",
    value: function getProgramsNowOnAir(area, service) {
      return this.getProgramsNowOnAirWithHttpInfo(area, service).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ProgramsApi;
}();

exports["default"] = ProgramsApi;