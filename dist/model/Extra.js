"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Link = _interopRequireDefault(require("./Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Extra model module.
 * @module model/Extra
 * @version 1.1.9
 */
var Extra = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Extra</code>.
   * @alias module:model/Extra
   */
  function Extra() {
    _classCallCheck(this, Extra);

    Extra.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Extra, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Extra</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Extra} obj Optional instance to populate.
     * @return {module:model/Extra} The populated <code>Extra</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Extra();

        if (data.hasOwnProperty('ondemand_program')) {
          obj['ondemand_program'] = _Link["default"].constructFromObject(data['ondemand_program']);
        }

        if (data.hasOwnProperty('ondemand_episode')) {
          obj['ondemand_episode'] = _Link["default"].constructFromObject(data['ondemand_episode']);
        }
      }

      return obj;
    }
  }]);

  return Extra;
}();
/**
 * @member {module:model/Link} ondemand_program
 */


Extra.prototype['ondemand_program'] = undefined;
/**
 * @member {module:model/Link} ondemand_episode
 */

Extra.prototype['ondemand_episode'] = undefined;
var _default = Extra;
exports["default"] = _default;