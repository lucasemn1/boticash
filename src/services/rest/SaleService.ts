import axios, { AxiosInstance } from "axios";
import ISaleCard from "../../interfaces/SaleCard";

class SaleService {
  private connection: AxiosInstance;

  constructor() {
    this.connection = axios.create({
      baseURL: process.env.REACT_APP_API_BASE_URL,
    });

    this.connection.interceptors.request.use((config) => {
      // Here the user's token would be injected
      /*
        const token = localStorage.getItem("accessToken");
        config.headers.authorization = `Bearer ${token}`;
      */

      return config;
    });
  }

  async getAllSalesFromUser() {
    try {
      const response = await this.connection.get<Array<ISaleCard>>("/sale");

      for(const sale of response.data) {
        sale.saleDate = new Date(Number(sale.saleDate));
      }

      return { status: true, response, data: response.data };
    } catch (err) {
      return {
        status: false,
        response: err.response,
        data: new Array<ISaleCard>(),
      };
    }
  }
}

export default SaleService;
