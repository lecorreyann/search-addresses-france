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

## Typescript config

There is a 🥊 between CommonJS and ESM... 😓

This project use the last version of node-fetch (^3.3.2) and node-fetch doesn't support the CommonJS anymore (only ESM) so we have to configure your **package.json** and your **tsconfig.json**:

- add `"type":"module"` to your **package.json**
- set `"module": "esnext"`, `"moduleResolution": "node10"` to your **tsconfig.json**,
- if you use `ts-mode` in your project, you can add:
  ```json
  "ts-node": {
      "esm": true, // «———— enabling ESM for ts-node
    },
  ```
  <br>

🎁 I give you a typical **tsconfig.json** working with this package:

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "esnext",
    "moduleResolution": "node10",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "ts-node": {
    "esm": true
  }
}
```
