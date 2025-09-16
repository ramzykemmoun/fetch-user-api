import axios from "axios";

export class User {
  async getAll(query?: QueryParams): Promise<GetUsersResponse> {
    const response = await axios.get(
      "https://dummyjson.com/users/search",
      query && {
        params: query,
      }
    );

    return response.data;
  }
}
