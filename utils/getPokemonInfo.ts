import { loadPokemon } from "../api";

export const getPokemonInfo = async ( idOrName: string ) => {
  const data = await loadPokemon(idOrName);
  if (typeof data === "string") {
    return  null;
  } else {
    const { id, name, sprites } = data;
    return { props: { id, name, sprites }, revalidate: 86400 };
  }
}
