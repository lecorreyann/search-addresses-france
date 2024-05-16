declare interface OKAPIAdresse {
  code: string;
  adresse: string;
}

type OKAPIControlAdresseApiResponse = OKAPIAdresse[];

declare interface OKAPIAdresseDetails {
  numeroVoie: string;
  libelleVoie: string;
  lieuDit: string;
  codePostal: string;
  commune: string;
}

declare interface GouvAdresseApiResponse {
  features: Feature[];
}

declare interface Feature {
  properties: Properties;
  geometry: Geometry;
}

declare interface Properties {
  postcode: string;
  city: string;
  name: string;
  housenumber: string;
}

declare interface Geometry {
  coordinates: number[];
}
