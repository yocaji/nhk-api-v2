/**
 * NHK API v2
 * JavaScript client for NHK Program Guide API.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Area model module.
 * @module model/Area
 * @version 1.0.0
 */
class Area {
    /**
     * Constructs a new <code>Area</code>.
     * @alias module:model/Area
     * @param id {String} 
     * @param name {String} 
     */
    constructor(id, name) { 
        
        Area.initialize(this, id, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name) { 
        obj['id'] = id;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>Area</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Area} obj Optional instance to populate.
     * @return {module:model/Area} The populated <code>Area</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Area();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Area.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Area.prototype['name'] = undefined;






export default Area;

