export default async function getAddressDetailsFromOkapiApi(code, OKAPI_API_KEY) {
    const response = await fetch(`https://api.laposte.fr/controladresse/v2/adresses/${code}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-Okapi-Key": OKAPI_API_KEY,
        },
    });
    return response;
}
