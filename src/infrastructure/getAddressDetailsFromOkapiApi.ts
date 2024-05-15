export default async function getAddressDetailsFromOkapiApi(
  code: string,
  OKAPI_API_KEY: string
): Promise<Response> {
  const response = await fetch(
    `https://api.laposte.fr/controladresse/v2/adresses/${code}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Okapi-Key": OKAPI_API_KEY,
      },
    }
  );
  return response;
}
