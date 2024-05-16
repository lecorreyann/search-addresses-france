import getAddressDetailsFromOkapiApi from "../../../infrastructure/getAddressDetailsFromOkapiApi.js";
describe("getAddressDetailsFromOkapiApi", () => {
    it("getAddressesDetailsFromOkapiApi when code is 3034204381", async () => {
        const result = await getAddressDetailsFromOkapiApi("3034204381", process.env.OKAPI_API_KEY);
        expect(result.status).toEqual(200);
    });
});
