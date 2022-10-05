import { loadPokemon } from "../api";

export const getPokemonInfo = async ( idOrName: string ) => {
  const data = await loadPokemon(idOrName);
  if (typeof data === "string") {
    return { props: { id: -1, name: "" } };
  } else {
    const { id, name, sprites } = data;
    return { props: { id, name, sprites } };
  }
}
