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
import Link from './Link';

/**
 * The Extra model module.
 * @module model/Extra
 * @version 1.1.8
 */
class Extra {
    /**
     * Constructs a new <code>Extra</code>.
     * @alias module:model/Extra
     */
    constructor() { 
        
        Extra.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Extra</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Extra} obj Optional instance to populate.
     * @return {module:model/Extra} The populated <code>Extra</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Extra();

            if (data.hasOwnProperty('ondemand_program')) {
                obj['ondemand_program'] = Link.constructFromObject(data['ondemand_program']);
            }
            if (data.hasOwnProperty('ondemand_episode')) {
                obj['ondemand_episode'] = Link.constructFromObject(data['ondemand_episode']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Link} ondemand_program
 */
Extra.prototype['ondemand_program'] = undefined;

/**
 * @member {module:model/Link} ondemand_episode
 */
Extra.prototype['ondemand_episode'] = undefined;






export default Extra;

