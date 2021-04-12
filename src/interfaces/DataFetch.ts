export interface DataFetchResponse {
  sprites: Sprite;
  name: string;
  id: number;
  types: TypePokemon[];
  stats: Stats[];
  weight: number;
  height: number;
}

interface Stats {
  base_stat: number;
}

interface Sprite {
  back_default: string;
  front_default: string;
}

export interface TypePokemon {
  type: TypeProps;
}

interface TypeProps {
  name: string;
}
