import getAddressesFromOkapiApi from "@/infrastructure/getAddressesFromOkapiApi";

describe("getAddressesFromOkapiApi", () => {
  it("getAddressesFromOkapiApi when query is 19 rue du", async () => {
    const result = await getAddressesFromOkapiApi(
      "19 rue du",
      process.env.OKAPI_API_KEY as string
    );

    expect(result.status).toEqual(200);
  });
});
