import {
  GET,
  HttpRequestOptions,
  Adapter,
} from "app/core/http";
import { ApiAdapter } from "./apiAdapter";

class ApiClient {

  @GET('/api')
  @Adapter(ApiAdapter.formattUsers)
  public loadUsers(
    requestOptions: HttpRequestOptions<{}, {
      page: number,
      results: number,
      seed: string,
      nat: string,
      noinfo: boolean,
    }>
  ) { return null; }
}

export default new ApiClient();


