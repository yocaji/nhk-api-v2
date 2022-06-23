"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DescriptionListList = _interopRequireDefault(require("./DescriptionListList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The DescriptionList model module.
 * @module model/DescriptionList
 * @version 1.1.3
 */
var DescriptionList = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DescriptionList</code>.
   * @alias module:model/DescriptionList
   * @param list {module:model/DescriptionListList} 
   */
  function DescriptionList(list) {
    _classCallCheck(this, DescriptionList);

    DescriptionList.initialize(this, list);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescriptionList, null, [{
    key: "initialize",
    value: function initialize(obj, list) {
      obj['list'] = list;
    }
    /**
     * Constructs a <code>DescriptionList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescriptionList} obj Optional instance to populate.
     * @return {module:model/DescriptionList} The populated <code>DescriptionList</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescriptionList();

        if (data.hasOwnProperty('list')) {
          obj['list'] = _DescriptionListList["default"].constructFromObject(data['list']);
        }
      }

      return obj;
    }
  }]);

  return DescriptionList;
}();
/**
 * @member {module:model/DescriptionListList} list
 */


DescriptionList.prototype['list'] = undefined;
var _default = DescriptionList;
exports["default"] = _default;