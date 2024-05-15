export default async function getAddressesFromOkapiApi(
  query: string,
  OKAPI_API_KEY: string
): Promise<Response> {
  const response = await fetch(
    `https://api.laposte.fr/controladresse/v2/adresses?q=${new URLSearchParams({
      q: query,
    }).toString()}`,
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
