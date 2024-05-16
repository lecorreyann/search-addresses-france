import getAddressDetailsFromOkapiApi from "../infrastructure/getAddressDetailsFromOkapiApi.js";
import getAddressesFromOkapiApi from "../infrastructure/getAddressesFromOkapiApi.js";
export default async function getAddressesFrance(query) {
    if (!process.env.OKAPI_API_KEY) {
        throw new Error("OKAPI API Key is not defined");
    }
    let addresses = [];
    const response = await getAddressesFromOkapiApi(query, process.env.OKAPI_API_KEY);
    if (response.status === 200) {
        const data = (await response.json());
        for await (let address of data) {
            const addressDetails = await getAddressDetailsFromOkapiApi(address.code, process.env.OKAPI_API_KEY);
            const data = (await addressDetails.json());
            addresses.push({
                postal_code: data.codePostal,
                city: data.commune,
                road: `${data.libelleVoie}${data.lieuDit ? ` ${data.lieuDit}` : ""}`,
                number: data.numeroVoie,
                country: "France",
                latitude: 0,
                longitude: 0,
            });
        }
    }
    return addresses;
}
