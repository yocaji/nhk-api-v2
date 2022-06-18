"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Program = _interopRequireDefault(require("./Program"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GetProgramsNowOnAir200ResponseNowonairListG1 model module.
 * @module model/GetProgramsNowOnAir200ResponseNowonairListG1
 * @version 1.0.0
 */
var GetProgramsNowOnAir200ResponseNowonairListG1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetProgramsNowOnAir200ResponseNowonairListG1</code>.
   * @alias module:model/GetProgramsNowOnAir200ResponseNowonairListG1
   * @param previous {module:model/Program} 
   * @param present {module:model/Program} 
   * @param following {module:model/Program} 
   */
  function GetProgramsNowOnAir200ResponseNowonairListG1(previous, present, following) {
    _classCallCheck(this, GetProgramsNowOnAir200ResponseNowonairListG1);

    GetProgramsNowOnAir200ResponseNowonairListG1.initialize(this, previous, present, following);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetProgramsNowOnAir200ResponseNowonairListG1, null, [{
    key: "initialize",
    value: function initialize(obj, previous, present, following) {
      obj['previous'] = previous;
      obj['present'] = present;
      obj['following'] = following;
    }
    /**
     * Constructs a <code>GetProgramsNowOnAir200ResponseNowonairListG1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetProgramsNowOnAir200ResponseNowonairListG1} obj Optional instance to populate.
     * @return {module:model/GetProgramsNowOnAir200ResponseNowonairListG1} The populated <code>GetProgramsNowOnAir200ResponseNowonairListG1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetProgramsNowOnAir200ResponseNowonairListG1();

        if (data.hasOwnProperty('previous')) {
          obj['previous'] = _Program["default"].constructFromObject(data['previous']);
        }

        if (data.hasOwnProperty('present')) {
          obj['present'] = _Program["default"].constructFromObject(data['present']);
        }

        if (data.hasOwnProperty('following')) {
          obj['following'] = _Program["default"].constructFromObject(data['following']);
        }
      }

      return obj;
    }
  }]);

  return GetProgramsNowOnAir200ResponseNowonairListG1;
}();
/**
 * @member {module:model/Program} previous
 */


GetProgramsNowOnAir200ResponseNowonairListG1.prototype['previous'] = undefined;
/**
 * @member {module:model/Program} present
 */

GetProgramsNowOnAir200ResponseNowonairListG1.prototype['present'] = undefined;
/**
 * @member {module:model/Program} following
 */

GetProgramsNowOnAir200ResponseNowonairListG1.prototype['following'] = undefined;
var _default = GetProgramsNowOnAir200ResponseNowonairListG1;
exports["default"] = _default;