"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Area = _interopRequireDefault(require("./Area"));

var _Service = _interopRequireDefault(require("./Service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Program model module.
 * @module model/Program
 * @version 1.0.0
 */
var Program = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Program</code>.
   * @alias module:model/Program
   * @param id {String} 
   * @param eventId {String} 
   * @param startTime {String} 
   * @param endTime {String} 
   * @param area {module:model/Area} 
   * @param service {module:model/Service} 
   * @param title {String} 
   * @param subtitle {String} 
   * @param genres {Array.<String>} 
   */
  function Program(id, eventId, startTime, endTime, area, service, title, subtitle, genres) {
    _classCallCheck(this, Program);

    Program.initialize(this, id, eventId, startTime, endTime, area, service, title, subtitle, genres);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Program, null, [{
    key: "initialize",
    value: function initialize(obj, id, eventId, startTime, endTime, area, service, title, subtitle, genres) {
      obj['id'] = id;
      obj['event_id'] = eventId;
      obj['start_time'] = startTime;
      obj['end_time'] = endTime;
      obj['area'] = area;
      obj['service'] = service;
      obj['title'] = title;
      obj['subtitle'] = subtitle;
      obj['genres'] = genres;
    }
    /**
     * Constructs a <code>Program</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Program} obj Optional instance to populate.
     * @return {module:model/Program} The populated <code>Program</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Program();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('event_id')) {
          obj['event_id'] = _ApiClient["default"].convertToType(data['event_id'], 'String');
        }

        if (data.hasOwnProperty('start_time')) {
          obj['start_time'] = _ApiClient["default"].convertToType(data['start_time'], 'String');
        }

        if (data.hasOwnProperty('end_time')) {
          obj['end_time'] = _ApiClient["default"].convertToType(data['end_time'], 'String');
        }

        if (data.hasOwnProperty('area')) {
          obj['area'] = _Area["default"].constructFromObject(data['area']);
        }

        if (data.hasOwnProperty('service')) {
          obj['service'] = _Service["default"].constructFromObject(data['service']);
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('subtitle')) {
          obj['subtitle'] = _ApiClient["default"].convertToType(data['subtitle'], 'String');
        }

        if (data.hasOwnProperty('genres')) {
          obj['genres'] = _ApiClient["default"].convertToType(data['genres'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return Program;
}();
/**
 * @member {String} id
 */


Program.prototype['id'] = undefined;
/**
 * @member {String} event_id
 */

Program.prototype['event_id'] = undefined;
/**
 * @member {String} start_time
 */

Program.prototype['start_time'] = undefined;
/**
 * @member {String} end_time
 */

Program.prototype['end_time'] = undefined;
/**
 * @member {module:model/Area} area
 */

Program.prototype['area'] = undefined;
/**
 * @member {module:model/Service} service
 */

Program.prototype['service'] = undefined;
/**
 * @member {String} title
 */

Program.prototype['title'] = undefined;
/**
 * @member {String} subtitle
 */

Program.prototype['subtitle'] = undefined;
/**
 * @member {Array.<String>} genres
 */

Program.prototype['genres'] = undefined;
var _default = Program;
exports["default"] = _default;