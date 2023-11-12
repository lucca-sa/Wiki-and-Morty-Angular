export interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  gender: string;
  created: string;
  status: string;
  type: string;
  origin: LocationInfo;
  location: LocationInfo;
}

interface LocationInfo {
  name: string;
  url: string;
}
