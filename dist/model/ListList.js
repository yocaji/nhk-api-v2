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
 * The ListList model module.
 * @module model/ListList
 * @version 1.1.7
 */
var ListList = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListList</code>.
   * @alias module:model/ListList
   */
  function ListList() {
    _classCallCheck(this, ListList);

    ListList.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListList, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ListList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListList} obj Optional instance to populate.
     * @return {module:model/ListList} The populated <code>ListList</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListList();

        if (data.hasOwnProperty('g1')) {
          obj['g1'] = _ApiClient["default"].convertToType(data['g1'], [_Program["default"]]);
        }

        if (data.hasOwnProperty('g2')) {
          obj['g2'] = _ApiClient["default"].convertToType(data['g2'], [_Program["default"]]);
        }

        if (data.hasOwnProperty('e1')) {
          obj['e1'] = _ApiClient["default"].convertToType(data['e1'], [_Program["default"]]);
        }

        if (data.hasOwnProperty('e2')) {
          obj['e2'] = _ApiClient["default"].convertToType(data['e2'], [_Program["default"]]);
        }

        if (data.hasOwnProperty('e3')) {
          obj['e3'] = _ApiClient["default"].convertToType(data['e3'], [_Program["default"]]);
        }

        if (data.hasOwnProperty('e4')) {
          obj['e4'] = _ApiClient["default"].convertToType(data['e4'], [_Program["default"]]);
        }

        if (data.hasOwnProperty('s1')) {
          obj['s1'] = _ApiClient["default"].convertToType(data['s1'], [_Program["default"]]);
        }

        if (data.hasOwnProperty('s2')) {
          obj['s2'] = _ApiClient["default"].convertToType(data['s2'], [_Program["default"]]);
        }

        if (data.hasOwnProperty('s3')) {
          obj['s3'] = _ApiClient["default"].convertToType(data['s3'], [_Program["default"]]);
        }

        if (data.hasOwnProperty('s4')) {
          obj['s4'] = _ApiClient["default"].convertToType(data['s4'], [_Program["default"]]);
        }

        if (data.hasOwnProperty('r1')) {
          obj['r1'] = _ApiClient["default"].convertToType(data['r1'], [_Program["default"]]);
        }

        if (data.hasOwnProperty('r2')) {
          obj['r2'] = _ApiClient["default"].convertToType(data['r2'], [_Program["default"]]);
        }

        if (data.hasOwnProperty('r3')) {
          obj['r3'] = _ApiClient["default"].convertToType(data['r3'], [_Program["default"]]);
        }

        if (data.hasOwnProperty('n1')) {
          obj['n1'] = _ApiClient["default"].convertToType(data['n1'], [_Program["default"]]);
        }

        if (data.hasOwnProperty('n2')) {
          obj['n2'] = _ApiClient["default"].convertToType(data['n2'], [_Program["default"]]);
        }

        if (data.hasOwnProperty('n3')) {
          obj['n3'] = _ApiClient["default"].convertToType(data['n3'], [_Program["default"]]);
        }

        if (data.hasOwnProperty('tv')) {
          obj['tv'] = _ApiClient["default"].convertToType(data['tv'], [_Program["default"]]);
        }

        if (data.hasOwnProperty('radio')) {
          obj['radio'] = _ApiClient["default"].convertToType(data['radio'], [_Program["default"]]);
        }

        if (data.hasOwnProperty('netradio')) {
          obj['netradio'] = _ApiClient["default"].convertToType(data['netradio'], [_Program["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ListList;
}();
/**
 * @member {Array.<module:model/Program>} g1
 */


ListList.prototype['g1'] = undefined;
/**
 * @member {Array.<module:model/Program>} g2
 */

ListList.prototype['g2'] = undefined;
/**
 * @member {Array.<module:model/Program>} e1
 */

ListList.prototype['e1'] = undefined;
/**
 * @member {Array.<module:model/Program>} e2
 */

ListList.prototype['e2'] = undefined;
/**
 * @member {Array.<module:model/Program>} e3
 */

ListList.prototype['e3'] = undefined;
/**
 * @member {Array.<module:model/Program>} e4
 */

ListList.prototype['e4'] = undefined;
/**
 * @member {Array.<module:model/Program>} s1
 */

ListList.prototype['s1'] = undefined;
/**
 * @member {Array.<module:model/Program>} s2
 */

ListList.prototype['s2'] = undefined;
/**
 * @member {Array.<module:model/Program>} s3
 */

ListList.prototype['s3'] = undefined;
/**
 * @member {Array.<module:model/Program>} s4
 */

ListList.prototype['s4'] = undefined;
/**
 * @member {Array.<module:model/Program>} r1
 */

ListList.prototype['r1'] = undefined;
/**
 * @member {Array.<module:model/Program>} r2
 */

ListList.prototype['r2'] = undefined;
/**
 * @member {Array.<module:model/Program>} r3
 */

ListList.prototype['r3'] = undefined;
/**
 * @member {Array.<module:model/Program>} n1
 */

ListList.prototype['n1'] = undefined;
/**
 * @member {Array.<module:model/Program>} n2
 */

ListList.prototype['n2'] = undefined;
/**
 * @member {Array.<module:model/Program>} n3
 */

ListList.prototype['n3'] = undefined;
/**
 * @member {Array.<module:model/Program>} tv
 */

ListList.prototype['tv'] = undefined;
/**
 * @member {Array.<module:model/Program>} radio
 */

ListList.prototype['radio'] = undefined;
/**
 * @member {Array.<module:model/Program>} netradio
 */

ListList.prototype['netradio'] = undefined;
var _default = ListList;
exports["default"] = _default;