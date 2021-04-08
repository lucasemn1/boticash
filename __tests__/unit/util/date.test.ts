import { getDateInBrazilianStandard } from "../../../src/util/date";

describe("Date util", () => {
  it("should format a date generated to the Brazilian standard", async () => {
    const date = new Date(Date.now());

    const formattedDate = getDateInBrazilianStandard(date);
    
    expect(formattedDate.split("/").length).toBe(3);
  });
});
