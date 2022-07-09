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
import Program from './Program';

/**
 * The NowOnAir model module.
 * @module model/NowOnAir
 * @version 1.1.15
 */
class NowOnAir {
    /**
     * Constructs a new <code>NowOnAir</code>.
     * @alias module:model/NowOnAir
     * @param previous {module:model/Program} 
     * @param present {module:model/Program} 
     * @param following {module:model/Program} 
     */
    constructor(previous, present, following) { 
        
        NowOnAir.initialize(this, previous, present, following);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, previous, present, following) { 
        obj['previous'] = previous;
        obj['present'] = present;
        obj['following'] = following;
    }

    /**
     * Constructs a <code>NowOnAir</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NowOnAir} obj Optional instance to populate.
     * @return {module:model/NowOnAir} The populated <code>NowOnAir</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NowOnAir();

            if (data.hasOwnProperty('previous')) {
                obj['previous'] = Program.constructFromObject(data['previous']);
            }
            if (data.hasOwnProperty('present')) {
                obj['present'] = Program.constructFromObject(data['present']);
            }
            if (data.hasOwnProperty('following')) {
                obj['following'] = Program.constructFromObject(data['following']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Program} previous
 */
NowOnAir.prototype['previous'] = undefined;

/**
 * @member {module:model/Program} present
 */
NowOnAir.prototype['present'] = undefined;

/**
 * @member {module:model/Program} following
 */
NowOnAir.prototype['following'] = undefined;






export default NowOnAir;

