import { Address } from "@/domain/Address";
import getAddressesFromGouvAdresseApi from "@/infrastructure/getAddressesFromGouvAdresseApi";

export default async function getAddressesFrance(
  query: string
): Promise<Address[]> {
  let addresses: Address[] = [];

  const response = await getAddressesFromGouvAdresseApi(query);
  const data = (await response.json()) as GouvAdresseApiResponse;

  if (response.status === 200) {
    for (let address of data.features) {
      addresses.push({
        postal_code: address.properties.postcode,
        city: address.properties.city,
        road: address.properties.name,
        number: address.properties.housenumber
          ? address.properties.housenumber
          : "",
        country: "France",
        latitude: address.geometry.coordinates[1],
        longitude: address.geometry.coordinates[0],
      });
    }
  }
  return addresses;
}
