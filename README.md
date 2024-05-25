# search-addresses-france

![ts](https://badgen.net/badge/Built%20With/TypeScript/blue)

Search french addresses with France Gouv API Adresse

## Install

`npm i @lecorreyann/search-addresses-france`

## How to use?

### Request

```typescript
import getAddressesFrance, {
  Address,
} from "@lecorreyann/search-addresses-france";

const query = "19 rue du Creux";
const response: Address[] = await getAddressesFrance(query);
```

### Response

`Address[]`

```json
[
  {
    postal_code: string;
    city: string;
    road: string;
    number: string;
    country: string;
    latitude: number;
    longitude: number;
  }
]

```
