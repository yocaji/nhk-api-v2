/**
 * NHK API v2
 * JavaScriptによるNHK番組表APIのクライアントです
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Area from './Area';
import Service from './Service';

/**
 * The Program model module.
 * @module model/Program
 * @version 1.1.15
 */
class Program {
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
    constructor(id, eventId, startTime, endTime, area, service, title, subtitle, genres) { 
        
        Program.initialize(this, id, eventId, startTime, endTime, area, service, title, subtitle, genres);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, eventId, startTime, endTime, area, service, title, subtitle, genres) { 
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
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Program();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('event_id')) {
                obj['event_id'] = ApiClient.convertToType(data['event_id'], 'String');
            }
            if (data.hasOwnProperty('start_time')) {
                obj['start_time'] = ApiClient.convertToType(data['start_time'], 'String');
            }
            if (data.hasOwnProperty('end_time')) {
                obj['end_time'] = ApiClient.convertToType(data['end_time'], 'String');
            }
            if (data.hasOwnProperty('area')) {
                obj['area'] = Area.constructFromObject(data['area']);
            }
            if (data.hasOwnProperty('service')) {
                obj['service'] = Service.constructFromObject(data['service']);
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('subtitle')) {
                obj['subtitle'] = ApiClient.convertToType(data['subtitle'], 'String');
            }
            if (data.hasOwnProperty('genres')) {
                obj['genres'] = ApiClient.convertToType(data['genres'], ['String']);
            }
        }
        return obj;
    }


}

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






export default Program;

