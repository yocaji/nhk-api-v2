"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Logo = _interopRequireDefault(require("./Logo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Service model module.
 * @module model/Service
 * @version 1.0.0
 */
var Service = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Service</code>.
   * @alias module:model/Service
   * @param id {String} 
   * @param name {String} 
   * @param logoS {module:model/Logo} 
   * @param logoM {module:model/Logo} 
   * @param logoL {module:model/Logo} 
   */
  function Service(id, name, logoS, logoM, logoL) {
    _classCallCheck(this, Service);

    Service.initialize(this, id, name, logoS, logoM, logoL);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Service, null, [{
    key: "initialize",
    value: function initialize(obj, id, name, logoS, logoM, logoL) {
      obj['id'] = id;
      obj['name'] = name;
      obj['logo_s'] = logoS;
      obj['logo_m'] = logoM;
      obj['logo_l'] = logoL;
    }
    /**
     * Constructs a <code>Service</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Service} obj Optional instance to populate.
     * @return {module:model/Service} The populated <code>Service</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Service();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('logo_s')) {
          obj['logo_s'] = _Logo["default"].constructFromObject(data['logo_s']);
        }

        if (data.hasOwnProperty('logo_m')) {
          obj['logo_m'] = _Logo["default"].constructFromObject(data['logo_m']);
        }

        if (data.hasOwnProperty('logo_l')) {
          obj['logo_l'] = _Logo["default"].constructFromObject(data['logo_l']);
        }
      }

      return obj;
    }
  }]);

  return Service;
}();
/**
 * @member {String} id
 */


Service.prototype['id'] = undefined;
/**
 * @member {String} name
 */

Service.prototype['name'] = undefined;
/**
 * @member {module:model/Logo} logo_s
 */

Service.prototype['logo_s'] = undefined;
/**
 * @member {module:model/Logo} logo_m
 */

Service.prototype['logo_m'] = undefined;
/**
 * @member {module:model/Logo} logo_l
 */

Service.prototype['logo_l'] = undefined;
var _default = Service;
exports["default"] = _default;