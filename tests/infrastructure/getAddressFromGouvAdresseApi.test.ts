import getAddressesFromGouvAdresseApi from "../../src/infrastructure/getAddressesFromGouvAdresseApi";

describe("getAddressFromGouvAdresseApi", () => {
  it("getAddressFromGouvAdresseApi when query is 19 rue du Creux", async () => {
    const result = await getAddressesFromGouvAdresseApi("19 rue du Creux");
    expect(result.status).toEqual(200);
  });
});
