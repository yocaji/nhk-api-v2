/**
 * NHK API v2
 * A JavaScript client for NHK Program Guide API.
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
import DescriptionListList from './DescriptionListList';

/**
 * The DescriptionList model module.
 * @module model/DescriptionList
 * @version 1.0.0
 */
class DescriptionList {
    /**
     * Constructs a new <code>DescriptionList</code>.
     * @alias module:model/DescriptionList
     * @param list {module:model/DescriptionListList} 
     */
    constructor(list) { 
        
        DescriptionList.initialize(this, list);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, list) { 
        obj['list'] = list;
    }

    /**
     * Constructs a <code>DescriptionList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescriptionList} obj Optional instance to populate.
     * @return {module:model/DescriptionList} The populated <code>DescriptionList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DescriptionList();

            if (data.hasOwnProperty('list')) {
                obj['list'] = DescriptionListList.constructFromObject(data['list']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/DescriptionListList} list
 */
DescriptionList.prototype['list'] = undefined;






export default DescriptionList;

