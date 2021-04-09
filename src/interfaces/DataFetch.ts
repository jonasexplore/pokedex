export interface DataFetchResponse {
  sprites: Sprite;
  name: string;
  id: number;
  types: Type[];
}

interface Sprite {
  front_default: string;
}

interface Type {
  type: TypeProps;
}

interface TypeProps {
  name: string;
}
