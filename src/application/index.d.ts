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
