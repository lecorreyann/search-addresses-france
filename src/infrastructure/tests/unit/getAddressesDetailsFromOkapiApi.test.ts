import getAddressDetailsFromOkapiApi from "@/infrastructure/getAddressDetailsFromOkapiApi";

describe("getAddressDetailsFromOkapiApi", () => {
  it("getAddressesDetailsFromOkapiApi when code is 3034204381", async () => {
    const result = await getAddressDetailsFromOkapiApi(
      "3034204381",
      process.env.OKAPI_API_KEY as string
    );

    expect(result.status).toEqual(200);
  });
});
