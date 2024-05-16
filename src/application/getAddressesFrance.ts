import { Address } from "@/domain/Address";
import getAddressDetailsFromOkapiApi from "@/infrastructure/getAddressDetailsFromOkapiApi";
import getAddressesFromOkapiApi from "@/infrastructure/getAddressesFromOkapiApi";

export default async function getAddressesFrance(
  query: string
): Promise<Address[]> {
  if (!process.env.OKAPI_API_KEY) {
    throw new Error("OKAPI API Key is not defined");
  }

  let addresses: Address[] = [];

  const response = await getAddressesFromOkapiApi(
    query,
    process.env.OKAPI_API_KEY as string
  );

  if (response.status === 200) {
    const data = (await response.json()) as OKAPIControlAdresseApiResponse;
    for await (let address of data) {
      const addressDetails = await getAddressDetailsFromOkapiApi(
        address.code,
        process.env.OKAPI_API_KEY as string
      );

      const data = (await addressDetails.json()) as OKAPIAdresseDetails;
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
