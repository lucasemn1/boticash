import SaleService from "../../../src/services/rest/SaleService";

describe("Sale Service", () => {
  it("should receive a sales list", async () => {
    const saleService = new SaleService();

    const { status, data } = await saleService.getAllSalesFromUser();

    expect(status).toBe(true);
    expect(data.length).not.toBe(0);
  });
});
