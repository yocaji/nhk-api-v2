"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetProgramsNowOnAir200ResponseNowonairList = _interopRequireDefault(require("./GetProgramsNowOnAir200ResponseNowonairList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GetProgramsNowOnAir200Response model module.
 * @module model/GetProgramsNowOnAir200Response
 * @version 1.0.0
 */
var GetProgramsNowOnAir200Response = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetProgramsNowOnAir200Response</code>.
   * @alias module:model/GetProgramsNowOnAir200Response
   * @param nowonairList {module:model/GetProgramsNowOnAir200ResponseNowonairList} 
   */
  function GetProgramsNowOnAir200Response(nowonairList) {
    _classCallCheck(this, GetProgramsNowOnAir200Response);

    GetProgramsNowOnAir200Response.initialize(this, nowonairList);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetProgramsNowOnAir200Response, null, [{
    key: "initialize",
    value: function initialize(obj, nowonairList) {
      obj['nowonair_list'] = nowonairList;
    }
    /**
     * Constructs a <code>GetProgramsNowOnAir200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetProgramsNowOnAir200Response} obj Optional instance to populate.
     * @return {module:model/GetProgramsNowOnAir200Response} The populated <code>GetProgramsNowOnAir200Response</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetProgramsNowOnAir200Response();

        if (data.hasOwnProperty('nowonair_list')) {
          obj['nowonair_list'] = _GetProgramsNowOnAir200ResponseNowonairList["default"].constructFromObject(data['nowonair_list']);
        }
      }

      return obj;
    }
  }]);

  return GetProgramsNowOnAir200Response;
}();
/**
 * @member {module:model/GetProgramsNowOnAir200ResponseNowonairList} nowonair_list
 */


GetProgramsNowOnAir200Response.prototype['nowonair_list'] = undefined;
var _default = GetProgramsNowOnAir200Response;
exports["default"] = _default;