"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NowOnAir = _interopRequireDefault(require("./NowOnAir"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The NowOnAirListNowonairList model module.
 * @module model/NowOnAirListNowonairList
 * @version 1.1.2
 */
var NowOnAirListNowonairList = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NowOnAirListNowonairList</code>.
   * @alias module:model/NowOnAirListNowonairList
   */
  function NowOnAirListNowonairList() {
    _classCallCheck(this, NowOnAirListNowonairList);

    NowOnAirListNowonairList.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NowOnAirListNowonairList, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NowOnAirListNowonairList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NowOnAirListNowonairList} obj Optional instance to populate.
     * @return {module:model/NowOnAirListNowonairList} The populated <code>NowOnAirListNowonairList</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NowOnAirListNowonairList();

        if (data.hasOwnProperty('g1')) {
          obj['g1'] = _NowOnAir["default"].constructFromObject(data['g1']);
        }

        if (data.hasOwnProperty('g2')) {
          obj['g2'] = _NowOnAir["default"].constructFromObject(data['g2']);
        }

        if (data.hasOwnProperty('e1')) {
          obj['e1'] = _NowOnAir["default"].constructFromObject(data['e1']);
        }

        if (data.hasOwnProperty('e2')) {
          obj['e2'] = _NowOnAir["default"].constructFromObject(data['e2']);
        }

        if (data.hasOwnProperty('e3')) {
          obj['e3'] = _NowOnAir["default"].constructFromObject(data['e3']);
        }

        if (data.hasOwnProperty('e4')) {
          obj['e4'] = _NowOnAir["default"].constructFromObject(data['e4']);
        }

        if (data.hasOwnProperty('s1')) {
          obj['s1'] = _NowOnAir["default"].constructFromObject(data['s1']);
        }

        if (data.hasOwnProperty('s2')) {
          obj['s2'] = _NowOnAir["default"].constructFromObject(data['s2']);
        }

        if (data.hasOwnProperty('s3')) {
          obj['s3'] = _NowOnAir["default"].constructFromObject(data['s3']);
        }

        if (data.hasOwnProperty('s4')) {
          obj['s4'] = _NowOnAir["default"].constructFromObject(data['s4']);
        }

        if (data.hasOwnProperty('r1')) {
          obj['r1'] = _NowOnAir["default"].constructFromObject(data['r1']);
        }

        if (data.hasOwnProperty('r2')) {
          obj['r2'] = _NowOnAir["default"].constructFromObject(data['r2']);
        }

        if (data.hasOwnProperty('r3')) {
          obj['r3'] = _NowOnAir["default"].constructFromObject(data['r3']);
        }

        if (data.hasOwnProperty('n1')) {
          obj['n1'] = _NowOnAir["default"].constructFromObject(data['n1']);
        }

        if (data.hasOwnProperty('n2')) {
          obj['n2'] = _NowOnAir["default"].constructFromObject(data['n2']);
        }

        if (data.hasOwnProperty('n3')) {
          obj['n3'] = _NowOnAir["default"].constructFromObject(data['n3']);
        }

        if (data.hasOwnProperty('tv')) {
          obj['tv'] = _NowOnAir["default"].constructFromObject(data['tv']);
        }

        if (data.hasOwnProperty('radio')) {
          obj['radio'] = _NowOnAir["default"].constructFromObject(data['radio']);
        }

        if (data.hasOwnProperty('netradio')) {
          obj['netradio'] = _NowOnAir["default"].constructFromObject(data['netradio']);
        }
      }

      return obj;
    }
  }]);

  return NowOnAirListNowonairList;
}();
/**
 * @member {module:model/NowOnAir} g1
 */


NowOnAirListNowonairList.prototype['g1'] = undefined;
/**
 * @member {module:model/NowOnAir} g2
 */

NowOnAirListNowonairList.prototype['g2'] = undefined;
/**
 * @member {module:model/NowOnAir} e1
 */

NowOnAirListNowonairList.prototype['e1'] = undefined;
/**
 * @member {module:model/NowOnAir} e2
 */

NowOnAirListNowonairList.prototype['e2'] = undefined;
/**
 * @member {module:model/NowOnAir} e3
 */

NowOnAirListNowonairList.prototype['e3'] = undefined;
/**
 * @member {module:model/NowOnAir} e4
 */

NowOnAirListNowonairList.prototype['e4'] = undefined;
/**
 * @member {module:model/NowOnAir} s1
 */

NowOnAirListNowonairList.prototype['s1'] = undefined;
/**
 * @member {module:model/NowOnAir} s2
 */

NowOnAirListNowonairList.prototype['s2'] = undefined;
/**
 * @member {module:model/NowOnAir} s3
 */

NowOnAirListNowonairList.prototype['s3'] = undefined;
/**
 * @member {module:model/NowOnAir} s4
 */

NowOnAirListNowonairList.prototype['s4'] = undefined;
/**
 * @member {module:model/NowOnAir} r1
 */

NowOnAirListNowonairList.prototype['r1'] = undefined;
/**
 * @member {module:model/NowOnAir} r2
 */

NowOnAirListNowonairList.prototype['r2'] = undefined;
/**
 * @member {module:model/NowOnAir} r3
 */

NowOnAirListNowonairList.prototype['r3'] = undefined;
/**
 * @member {module:model/NowOnAir} n1
 */

NowOnAirListNowonairList.prototype['n1'] = undefined;
/**
 * @member {module:model/NowOnAir} n2
 */

NowOnAirListNowonairList.prototype['n2'] = undefined;
/**
 * @member {module:model/NowOnAir} n3
 */

NowOnAirListNowonairList.prototype['n3'] = undefined;
/**
 * @member {module:model/NowOnAir} tv
 */

NowOnAirListNowonairList.prototype['tv'] = undefined;
/**
 * @member {module:model/NowOnAir} radio
 */

NowOnAirListNowonairList.prototype['radio'] = undefined;
/**
 * @member {module:model/NowOnAir} netradio
 */

NowOnAirListNowonairList.prototype['netradio'] = undefined;
var _default = NowOnAirListNowonairList;
exports["default"] = _default;