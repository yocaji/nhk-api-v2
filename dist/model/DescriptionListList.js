"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Description = _interopRequireDefault(require("./Description"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The DescriptionListList model module.
 * @module model/DescriptionListList
 * @version 1.0.0
 */
var DescriptionListList = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DescriptionListList</code>.
   * @alias module:model/DescriptionListList
   */
  function DescriptionListList() {
    _classCallCheck(this, DescriptionListList);

    DescriptionListList.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescriptionListList, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescriptionListList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescriptionListList} obj Optional instance to populate.
     * @return {module:model/DescriptionListList} The populated <code>DescriptionListList</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescriptionListList();

        if (data.hasOwnProperty('g1')) {
          obj['g1'] = _ApiClient["default"].convertToType(data['g1'], [_Description["default"]]);
        }

        if (data.hasOwnProperty('g2')) {
          obj['g2'] = _ApiClient["default"].convertToType(data['g2'], [_Description["default"]]);
        }

        if (data.hasOwnProperty('e1')) {
          obj['e1'] = _ApiClient["default"].convertToType(data['e1'], [_Description["default"]]);
        }

        if (data.hasOwnProperty('e2')) {
          obj['e2'] = _ApiClient["default"].convertToType(data['e2'], [_Description["default"]]);
        }

        if (data.hasOwnProperty('e3')) {
          obj['e3'] = _ApiClient["default"].convertToType(data['e3'], [_Description["default"]]);
        }

        if (data.hasOwnProperty('e4')) {
          obj['e4'] = _ApiClient["default"].convertToType(data['e4'], [_Description["default"]]);
        }

        if (data.hasOwnProperty('s1')) {
          obj['s1'] = _ApiClient["default"].convertToType(data['s1'], [_Description["default"]]);
        }

        if (data.hasOwnProperty('s2')) {
          obj['s2'] = _ApiClient["default"].convertToType(data['s2'], [_Description["default"]]);
        }

        if (data.hasOwnProperty('s3')) {
          obj['s3'] = _ApiClient["default"].convertToType(data['s3'], [_Description["default"]]);
        }

        if (data.hasOwnProperty('s4')) {
          obj['s4'] = _ApiClient["default"].convertToType(data['s4'], [_Description["default"]]);
        }

        if (data.hasOwnProperty('r1')) {
          obj['r1'] = _ApiClient["default"].convertToType(data['r1'], [_Description["default"]]);
        }

        if (data.hasOwnProperty('r2')) {
          obj['r2'] = _ApiClient["default"].convertToType(data['r2'], [_Description["default"]]);
        }

        if (data.hasOwnProperty('r3')) {
          obj['r3'] = _ApiClient["default"].convertToType(data['r3'], [_Description["default"]]);
        }

        if (data.hasOwnProperty('n1')) {
          obj['n1'] = _ApiClient["default"].convertToType(data['n1'], [_Description["default"]]);
        }

        if (data.hasOwnProperty('n2')) {
          obj['n2'] = _ApiClient["default"].convertToType(data['n2'], [_Description["default"]]);
        }

        if (data.hasOwnProperty('n3')) {
          obj['n3'] = _ApiClient["default"].convertToType(data['n3'], [_Description["default"]]);
        }

        if (data.hasOwnProperty('tv')) {
          obj['tv'] = _ApiClient["default"].convertToType(data['tv'], [_Description["default"]]);
        }

        if (data.hasOwnProperty('radio')) {
          obj['radio'] = _ApiClient["default"].convertToType(data['radio'], [_Description["default"]]);
        }

        if (data.hasOwnProperty('netradio')) {
          obj['netradio'] = _ApiClient["default"].convertToType(data['netradio'], [_Description["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DescriptionListList;
}();
/**
 * @member {Array.<module:model/Description>} g1
 */


DescriptionListList.prototype['g1'] = undefined;
/**
 * @member {Array.<module:model/Description>} g2
 */

DescriptionListList.prototype['g2'] = undefined;
/**
 * @member {Array.<module:model/Description>} e1
 */

DescriptionListList.prototype['e1'] = undefined;
/**
 * @member {Array.<module:model/Description>} e2
 */

DescriptionListList.prototype['e2'] = undefined;
/**
 * @member {Array.<module:model/Description>} e3
 */

DescriptionListList.prototype['e3'] = undefined;
/**
 * @member {Array.<module:model/Description>} e4
 */

DescriptionListList.prototype['e4'] = undefined;
/**
 * @member {Array.<module:model/Description>} s1
 */

DescriptionListList.prototype['s1'] = undefined;
/**
 * @member {Array.<module:model/Description>} s2
 */

DescriptionListList.prototype['s2'] = undefined;
/**
 * @member {Array.<module:model/Description>} s3
 */

DescriptionListList.prototype['s3'] = undefined;
/**
 * @member {Array.<module:model/Description>} s4
 */

DescriptionListList.prototype['s4'] = undefined;
/**
 * @member {Array.<module:model/Description>} r1
 */

DescriptionListList.prototype['r1'] = undefined;
/**
 * @member {Array.<module:model/Description>} r2
 */

DescriptionListList.prototype['r2'] = undefined;
/**
 * @member {Array.<module:model/Description>} r3
 */

DescriptionListList.prototype['r3'] = undefined;
/**
 * @member {Array.<module:model/Description>} n1
 */

DescriptionListList.prototype['n1'] = undefined;
/**
 * @member {Array.<module:model/Description>} n2
 */

DescriptionListList.prototype['n2'] = undefined;
/**
 * @member {Array.<module:model/Description>} n3
 */

DescriptionListList.prototype['n3'] = undefined;
/**
 * @member {Array.<module:model/Description>} tv
 */

DescriptionListList.prototype['tv'] = undefined;
/**
 * @member {Array.<module:model/Description>} radio
 */

DescriptionListList.prototype['radio'] = undefined;
/**
 * @member {Array.<module:model/Description>} netradio
 */

DescriptionListList.prototype['netradio'] = undefined;
var _default = DescriptionListList;
exports["default"] = _default;