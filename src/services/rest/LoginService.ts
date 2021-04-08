import axios, { AxiosInstance } from "axios";

class LoginService {
  private connection: AxiosInstance;

  constructor() {
    this.connection = axios.create({
      baseURL: process.env.REACT_APP_API_BASE_URL,
    });
  }

  async getAccessToken(credentials: { email: string, password: string }) {
    try {
      const response = await this.connection.post<string>("/api/token", credentials);

      return { status: true, response, data: response.data };
    } catch (err) {
      console.log(err);

      return {
        status: false,
        response: err.response,
        data: "",
      };
    }
  }
}

export default LoginService;
