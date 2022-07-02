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
import Logo from './Logo';

/**
 * The Service model module.
 * @module model/Service
 * @version 1.1.6
 */
class Service {
    /**
     * Constructs a new <code>Service</code>.
     * @alias module:model/Service
     * @param id {String} 
     * @param name {String} 
     * @param logoS {module:model/Logo} 
     * @param logoM {module:model/Logo} 
     * @param logoL {module:model/Logo} 
     */
    constructor(id, name, logoS, logoM, logoL) { 
        
        Service.initialize(this, id, name, logoS, logoM, logoL);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, logoS, logoM, logoL) { 
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
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Service();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('logo_s')) {
                obj['logo_s'] = Logo.constructFromObject(data['logo_s']);
            }
            if (data.hasOwnProperty('logo_m')) {
                obj['logo_m'] = Logo.constructFromObject(data['logo_m']);
            }
            if (data.hasOwnProperty('logo_l')) {
                obj['logo_l'] = Logo.constructFromObject(data['logo_l']);
            }
        }
        return obj;
    }


}

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






export default Service;

