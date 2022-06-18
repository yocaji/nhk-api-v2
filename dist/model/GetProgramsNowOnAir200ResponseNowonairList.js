"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetProgramsNowOnAir200ResponseNowonairListG = _interopRequireDefault(require("./GetProgramsNowOnAir200ResponseNowonairListG1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GetProgramsNowOnAir200ResponseNowonairList model module.
 * @module model/GetProgramsNowOnAir200ResponseNowonairList
 * @version 1.0.0
 */
var GetProgramsNowOnAir200ResponseNowonairList = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetProgramsNowOnAir200ResponseNowonairList</code>.
   * @alias module:model/GetProgramsNowOnAir200ResponseNowonairList
   * @param g1 {module:model/GetProgramsNowOnAir200ResponseNowonairListG1} 
   */
  function GetProgramsNowOnAir200ResponseNowonairList(g1) {
    _classCallCheck(this, GetProgramsNowOnAir200ResponseNowonairList);

    GetProgramsNowOnAir200ResponseNowonairList.initialize(this, g1);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetProgramsNowOnAir200ResponseNowonairList, null, [{
    key: "initialize",
    value: function initialize(obj, g1) {
      obj['g1'] = g1;
    }
    /**
     * Constructs a <code>GetProgramsNowOnAir200ResponseNowonairList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetProgramsNowOnAir200ResponseNowonairList} obj Optional instance to populate.
     * @return {module:model/GetProgramsNowOnAir200ResponseNowonairList} The populated <code>GetProgramsNowOnAir200ResponseNowonairList</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetProgramsNowOnAir200ResponseNowonairList();

        if (data.hasOwnProperty('g1')) {
          obj['g1'] = _GetProgramsNowOnAir200ResponseNowonairListG["default"].constructFromObject(data['g1']);
        }
      }

      return obj;
    }
  }]);

  return GetProgramsNowOnAir200ResponseNowonairList;
}();
/**
 * @member {module:model/GetProgramsNowOnAir200ResponseNowonairListG1} g1
 */


GetProgramsNowOnAir200ResponseNowonairList.prototype['g1'] = undefined;
var _default = GetProgramsNowOnAir200ResponseNowonairList;
exports["default"] = _default;