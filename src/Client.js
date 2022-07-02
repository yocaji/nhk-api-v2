import ApiClient from './ApiClient'
import ProgramsApi from "./api/ProgramsApi";

export default class Client {
  constructor(key) {
    const defaultClient = ApiClient.instance
    const api_key = defaultClient.authentications.api_key
    api_key.apiKey = key

    return new ProgramsApi()
  }
}
