export default async function getAddressesFromGouvAdresseApi(query) {
    const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${new URLSearchParams({
        q: query,
    }).toString()}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response;
}
