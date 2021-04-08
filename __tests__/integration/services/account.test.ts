import AccountService from "../../../src/services/rest/AccountService";

describe("Account Service", () => {
  it("should create a new user account", async () => {
    const accountService = new AccountService();

    const currentTime = Date.now();

    const requestData = {
      name: `Account test - ${currentTime}`,
      email: `account_test_${currentTime}@email.com`,
      password: String(currentTime),
      cpf: String(currentTime),
    }

    const { status } = await accountService.createAccount(requestData);

    expect(status).toBe(true);
  });
});