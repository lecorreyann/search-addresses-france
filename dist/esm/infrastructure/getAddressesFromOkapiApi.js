export default async function getAddressesFromOkapiApi(query, OKAPI_API_KEY) {
    const response = await fetch(`https://api.laposte.fr/controladresse/v2/adresses?q=${new URLSearchParams({
        q: query,
    }).toString()}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-Okapi-Key": OKAPI_API_KEY,
        },
    });
    return response;
}
