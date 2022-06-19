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


import ApiClient from './ApiClient';
import Area from './model/Area';
import Description from './model/Description';
import DescriptionList from './model/DescriptionList';
import DescriptionListList from './model/DescriptionListList';
import Error from './model/Error';
import ErrorError from './model/ErrorError';
import Extra from './model/Extra';
import Link from './model/Link';
import List from './model/List';
import ListList from './model/ListList';
import Logo from './model/Logo';
import NowOnAir from './model/NowOnAir';
import NowOnAirList from './model/NowOnAirList';
import NowOnAirListNowonairList from './model/NowOnAirListNowonairList';
import Program from './model/Program';
import Service from './model/Service';
import ProgramsApi from './api/ProgramsApi';


/**
* A_JavaScript_client_for_NHK_Program_Guide_API_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var NhkApiV2 = require('index'); // See note below*.
* var xxxSvc = new NhkApiV2.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new NhkApiV2.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new NhkApiV2.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new NhkApiV2.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.1.1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Area model constructor.
     * @property {module:model/Area}
     */
    Area,

    /**
     * The Description model constructor.
     * @property {module:model/Description}
     */
    Description,

    /**
     * The DescriptionList model constructor.
     * @property {module:model/DescriptionList}
     */
    DescriptionList,

    /**
     * The DescriptionListList model constructor.
     * @property {module:model/DescriptionListList}
     */
    DescriptionListList,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The ErrorError model constructor.
     * @property {module:model/ErrorError}
     */
    ErrorError,

    /**
     * The Extra model constructor.
     * @property {module:model/Extra}
     */
    Extra,

    /**
     * The Link model constructor.
     * @property {module:model/Link}
     */
    Link,

    /**
     * The List model constructor.
     * @property {module:model/List}
     */
    List,

    /**
     * The ListList model constructor.
     * @property {module:model/ListList}
     */
    ListList,

    /**
     * The Logo model constructor.
     * @property {module:model/Logo}
     */
    Logo,

    /**
     * The NowOnAir model constructor.
     * @property {module:model/NowOnAir}
     */
    NowOnAir,

    /**
     * The NowOnAirList model constructor.
     * @property {module:model/NowOnAirList}
     */
    NowOnAirList,

    /**
     * The NowOnAirListNowonairList model constructor.
     * @property {module:model/NowOnAirListNowonairList}
     */
    NowOnAirListNowonairList,

    /**
     * The Program model constructor.
     * @property {module:model/Program}
     */
    Program,

    /**
     * The Service model constructor.
     * @property {module:model/Service}
     */
    Service,

    /**
    * The ProgramsApi service constructor.
    * @property {module:api/ProgramsApi}
    */
    ProgramsApi
};
