"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Area = _interopRequireDefault(require("./Area"));

var _Extra = _interopRequireDefault(require("./Extra"));

var _Logo = _interopRequireDefault(require("./Logo"));

var _Service = _interopRequireDefault(require("./Service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Description model module.
 * @module model/Description
 * @version 1.1.8
 */
var Description = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Description</code>.
   * @alias module:model/Description
   * @param id {String} 
   * @param eventId {String} 
   * @param startTime {String} 
   * @param endTime {String} 
   * @param area {module:model/Area} 
   * @param service {module:model/Service} 
   * @param title {String} 
   * @param subtitle {String} 
   * @param content {String} 
   * @param act {String} 
   * @param genres {Array.<String>} 
   * @param programLogo {module:model/Logo} 
   * @param hashtags {Array.<String>} 
   */
  function Description(id, eventId, startTime, endTime, area, service, title, subtitle, content, act, genres, programLogo, hashtags) {
    _classCallCheck(this, Description);

    Description.initialize(this, id, eventId, startTime, endTime, area, service, title, subtitle, content, act, genres, programLogo, hashtags);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Description, null, [{
    key: "initialize",
    value: function initialize(obj, id, eventId, startTime, endTime, area, service, title, subtitle, content, act, genres, programLogo, hashtags) {
      obj['id'] = id;
      obj['event_id'] = eventId;
      obj['start_time'] = startTime;
      obj['end_time'] = endTime;
      obj['area'] = area;
      obj['service'] = service;
      obj['title'] = title;
      obj['subtitle'] = subtitle;
      obj['content'] = content;
      obj['act'] = act;
      obj['genres'] = genres;
      obj['program_logo'] = programLogo;
      obj['hashtags'] = hashtags;
    }
    /**
     * Constructs a <code>Description</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Description} obj Optional instance to populate.
     * @return {module:model/Description} The populated <code>Description</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Description();

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

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], 'String');
        }

        if (data.hasOwnProperty('act')) {
          obj['act'] = _ApiClient["default"].convertToType(data['act'], 'String');
        }

        if (data.hasOwnProperty('genres')) {
          obj['genres'] = _ApiClient["default"].convertToType(data['genres'], ['String']);
        }

        if (data.hasOwnProperty('program_logo')) {
          obj['program_logo'] = _Logo["default"].constructFromObject(data['program_logo']);
        }

        if (data.hasOwnProperty('program_url')) {
          obj['program_url'] = _ApiClient["default"].convertToType(data['program_url'], 'String');
        }

        if (data.hasOwnProperty('hashtags')) {
          obj['hashtags'] = _ApiClient["default"].convertToType(data['hashtags'], ['String']);
        }

        if (data.hasOwnProperty('extras')) {
          obj['extras'] = _Extra["default"].constructFromObject(data['extras']);
        }
      }

      return obj;
    }
  }]);

  return Description;
}();
/**
 * @member {String} id
 */


Description.prototype['id'] = undefined;
/**
 * @member {String} event_id
 */

Description.prototype['event_id'] = undefined;
/**
 * @member {String} start_time
 */

Description.prototype['start_time'] = undefined;
/**
 * @member {String} end_time
 */

Description.prototype['end_time'] = undefined;
/**
 * @member {module:model/Area} area
 */

Description.prototype['area'] = undefined;
/**
 * @member {module:model/Service} service
 */

Description.prototype['service'] = undefined;
/**
 * @member {String} title
 */

Description.prototype['title'] = undefined;
/**
 * @member {String} subtitle
 */

Description.prototype['subtitle'] = undefined;
/**
 * @member {String} content
 */

Description.prototype['content'] = undefined;
/**
 * @member {String} act
 */

Description.prototype['act'] = undefined;
/**
 * @member {Array.<String>} genres
 */

Description.prototype['genres'] = undefined;
/**
 * @member {module:model/Logo} program_logo
 */

Description.prototype['program_logo'] = undefined;
/**
 * @member {String} program_url
 */

Description.prototype['program_url'] = undefined;
/**
 * @member {Array.<String>} hashtags
 */

Description.prototype['hashtags'] = undefined;
/**
 * @member {module:model/Extra} extras
 */

Description.prototype['extras'] = undefined;
var _default = Description;
exports["default"] = _default;