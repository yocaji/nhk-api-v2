"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NowOnAirListNowonairList = _interopRequireDefault(require("./NowOnAirListNowonairList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The NowOnAirList model module.
 * @module model/NowOnAirList
 * @version 1.1.1
 */
var NowOnAirList = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NowOnAirList</code>.
   * @alias module:model/NowOnAirList
   * @param nowonairList {module:model/NowOnAirListNowonairList} 
   */
  function NowOnAirList(nowonairList) {
    _classCallCheck(this, NowOnAirList);

    NowOnAirList.initialize(this, nowonairList);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NowOnAirList, null, [{
    key: "initialize",
    value: function initialize(obj, nowonairList) {
      obj['nowonair_list'] = nowonairList;
    }
    /**
     * Constructs a <code>NowOnAirList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NowOnAirList} obj Optional instance to populate.
     * @return {module:model/NowOnAirList} The populated <code>NowOnAirList</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NowOnAirList();

        if (data.hasOwnProperty('nowonair_list')) {
          obj['nowonair_list'] = _NowOnAirListNowonairList["default"].constructFromObject(data['nowonair_list']);
        }
      }

      return obj;
    }
  }]);

  return NowOnAirList;
}();
/**
 * @member {module:model/NowOnAirListNowonairList} nowonair_list
 */


NowOnAirList.prototype['nowonair_list'] = undefined;
var _default = NowOnAirList;
exports["default"] = _default;