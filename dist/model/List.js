"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListList = _interopRequireDefault(require("./ListList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The List model module.
 * @module model/List
 * @version 1.1.6
 */
var List = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>List</code>.
   * @alias module:model/List
   * @param list {module:model/ListList} 
   */
  function List(list) {
    _classCallCheck(this, List);

    List.initialize(this, list);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(List, null, [{
    key: "initialize",
    value: function initialize(obj, list) {
      obj['list'] = list;
    }
    /**
     * Constructs a <code>List</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/List} obj Optional instance to populate.
     * @return {module:model/List} The populated <code>List</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new List();

        if (data.hasOwnProperty('list')) {
          obj['list'] = _ListList["default"].constructFromObject(data['list']);
        }
      }

      return obj;
    }
  }]);

  return List;
}();
/**
 * @member {module:model/ListList} list
 */


List.prototype['list'] = undefined;
var _default = List;
exports["default"] = _default;