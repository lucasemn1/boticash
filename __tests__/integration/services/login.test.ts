import LoginService from "../../../src/services/rest/LoginService";

describe("Login Service", () => {
  it("should not receive a new json web token (JWT)", async () => {
    const loginService = new LoginService();

    const { status } = await loginService.getAccessToken({
      email: "",
      password: "",
    });

    expect(status).toBe(false);
  });
});
