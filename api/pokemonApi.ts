import axios from "axios";
import { PokemonDetails, PokemonListResponse } from "../interfaces";

export async function loadPokemonList() {
  try {
    const { data } = await axios.get<PokemonListResponse>(
      "https://pokeapi.co/api/v2/pokemon?limit=51"
    );
    return data.results;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    } else {
      return "An unexpected error occurred in loadPokemonList";
    }
  }
}

export async function loadPokemon(id: string) {
  try {
    const { data } = await axios.get<PokemonDetails>(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    } else {
      return "An unexpected error occurred in loadPokemon";
    }
  }
}
