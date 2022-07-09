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
 * The ListList model module.
 * @module model/ListList
 * @version 1.1.10
 */
class ListList {
    /**
     * Constructs a new <code>ListList</code>.
     * @alias module:model/ListList
     */
    constructor() { 
        
        ListList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListList} obj Optional instance to populate.
     * @return {module:model/ListList} The populated <code>ListList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListList();

            if (data.hasOwnProperty('g1')) {
                obj['g1'] = ApiClient.convertToType(data['g1'], [Program]);
            }
            if (data.hasOwnProperty('g2')) {
                obj['g2'] = ApiClient.convertToType(data['g2'], [Program]);
            }
            if (data.hasOwnProperty('e1')) {
                obj['e1'] = ApiClient.convertToType(data['e1'], [Program]);
            }
            if (data.hasOwnProperty('e2')) {
                obj['e2'] = ApiClient.convertToType(data['e2'], [Program]);
            }
            if (data.hasOwnProperty('e3')) {
                obj['e3'] = ApiClient.convertToType(data['e3'], [Program]);
            }
            if (data.hasOwnProperty('e4')) {
                obj['e4'] = ApiClient.convertToType(data['e4'], [Program]);
            }
            if (data.hasOwnProperty('s1')) {
                obj['s1'] = ApiClient.convertToType(data['s1'], [Program]);
            }
            if (data.hasOwnProperty('s2')) {
                obj['s2'] = ApiClient.convertToType(data['s2'], [Program]);
            }
            if (data.hasOwnProperty('s3')) {
                obj['s3'] = ApiClient.convertToType(data['s3'], [Program]);
            }
            if (data.hasOwnProperty('s4')) {
                obj['s4'] = ApiClient.convertToType(data['s4'], [Program]);
            }
            if (data.hasOwnProperty('r1')) {
                obj['r1'] = ApiClient.convertToType(data['r1'], [Program]);
            }
            if (data.hasOwnProperty('r2')) {
                obj['r2'] = ApiClient.convertToType(data['r2'], [Program]);
            }
            if (data.hasOwnProperty('r3')) {
                obj['r3'] = ApiClient.convertToType(data['r3'], [Program]);
            }
            if (data.hasOwnProperty('n1')) {
                obj['n1'] = ApiClient.convertToType(data['n1'], [Program]);
            }
            if (data.hasOwnProperty('n2')) {
                obj['n2'] = ApiClient.convertToType(data['n2'], [Program]);
            }
            if (data.hasOwnProperty('n3')) {
                obj['n3'] = ApiClient.convertToType(data['n3'], [Program]);
            }
            if (data.hasOwnProperty('tv')) {
                obj['tv'] = ApiClient.convertToType(data['tv'], [Program]);
            }
            if (data.hasOwnProperty('radio')) {
                obj['radio'] = ApiClient.convertToType(data['radio'], [Program]);
            }
            if (data.hasOwnProperty('netradio')) {
                obj['netradio'] = ApiClient.convertToType(data['netradio'], [Program]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Program>} g1
 */
ListList.prototype['g1'] = undefined;

/**
 * @member {Array.<module:model/Program>} g2
 */
ListList.prototype['g2'] = undefined;

/**
 * @member {Array.<module:model/Program>} e1
 */
ListList.prototype['e1'] = undefined;

/**
 * @member {Array.<module:model/Program>} e2
 */
ListList.prototype['e2'] = undefined;

/**
 * @member {Array.<module:model/Program>} e3
 */
ListList.prototype['e3'] = undefined;

/**
 * @member {Array.<module:model/Program>} e4
 */
ListList.prototype['e4'] = undefined;

/**
 * @member {Array.<module:model/Program>} s1
 */
ListList.prototype['s1'] = undefined;

/**
 * @member {Array.<module:model/Program>} s2
 */
ListList.prototype['s2'] = undefined;

/**
 * @member {Array.<module:model/Program>} s3
 */
ListList.prototype['s3'] = undefined;

/**
 * @member {Array.<module:model/Program>} s4
 */
ListList.prototype['s4'] = undefined;

/**
 * @member {Array.<module:model/Program>} r1
 */
ListList.prototype['r1'] = undefined;

/**
 * @member {Array.<module:model/Program>} r2
 */
ListList.prototype['r2'] = undefined;

/**
 * @member {Array.<module:model/Program>} r3
 */
ListList.prototype['r3'] = undefined;

/**
 * @member {Array.<module:model/Program>} n1
 */
ListList.prototype['n1'] = undefined;

/**
 * @member {Array.<module:model/Program>} n2
 */
ListList.prototype['n2'] = undefined;

/**
 * @member {Array.<module:model/Program>} n3
 */
ListList.prototype['n3'] = undefined;

/**
 * @member {Array.<module:model/Program>} tv
 */
ListList.prototype['tv'] = undefined;

/**
 * @member {Array.<module:model/Program>} radio
 */
ListList.prototype['radio'] = undefined;

/**
 * @member {Array.<module:model/Program>} netradio
 */
ListList.prototype['netradio'] = undefined;






export default ListList;

