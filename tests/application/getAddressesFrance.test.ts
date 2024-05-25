import getAddressesFrance from "../../src/application/getAddressesFrance";

describe("getAddressesFrance", () => {
  it("getAddressesFrance when query is 19 rue du Creux", async () => {
    const result = await getAddressesFrance("19 rue du Creux");
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toHaveProperty("postal_code");
    expect(result[0].postal_code).toBeDefined();
    expect(result[0].postal_code.trim()).not.toEqual("");
    expect(result[0]).toHaveProperty("city");
    expect(result[0].city).toBeDefined();
    expect(result[0].city).not.toEqual("");
    expect(result[0]).toHaveProperty("road");
    expect(result[0].road).toBeDefined();
    expect(result[0].road.trim()).not.toEqual("");
    expect(result[0]).toHaveProperty("number");
    expect(result[0].number).toBeDefined();
    expect(result[0].country).toBeDefined();
    expect(result[0].country.trim()).not.toEqual("");
  });
});
