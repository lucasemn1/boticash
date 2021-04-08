import axios, { AxiosInstance } from "axios";

interface IAccountData {
  name: string;
  email: string;
  cpf: string;
  password: string;
}

class CreateAccount {
  private connection: AxiosInstance;

  constructor() {
    this.connection = axios.create({
      baseURL: process.env.REACT_APP_API_BASE_URL,
    });
  }

  async createAccount(accountData: IAccountData) {
    try {
      const response = await this.connection.post("/users", accountData);

      return { status: true, response };
    } catch (err) {
      return { status: false, response: err.response };
    }
  }
}

export default CreateAccount;
