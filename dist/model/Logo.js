"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Logo model module.
 * @module model/Logo
 * @version 1.1.0
 */
var Logo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Logo</code>.
   * @alias module:model/Logo
   * @param url {String} 
   * @param width {String} 
   * @param height {String} 
   */
  function Logo(url, width, height) {
    _classCallCheck(this, Logo);

    Logo.initialize(this, url, width, height);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Logo, null, [{
    key: "initialize",
    value: function initialize(obj, url, width, height) {
      obj['url'] = url;
      obj['width'] = width;
      obj['height'] = height;
    }
    /**
     * Constructs a <code>Logo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Logo} obj Optional instance to populate.
     * @return {module:model/Logo} The populated <code>Logo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Logo();

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('width')) {
          obj['width'] = _ApiClient["default"].convertToType(data['width'], 'String');
        }

        if (data.hasOwnProperty('height')) {
          obj['height'] = _ApiClient["default"].convertToType(data['height'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Logo;
}();
/**
 * @member {String} url
 */


Logo.prototype['url'] = undefined;
/**
 * @member {String} width
 */

Logo.prototype['width'] = undefined;
/**
 * @member {String} height
 */

Logo.prototype['height'] = undefined;
var _default = Logo;
exports["default"] = _default;