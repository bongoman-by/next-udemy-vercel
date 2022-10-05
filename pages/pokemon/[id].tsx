import { GetStaticProps, NextPage } from "next";

import {loadPokemonList } from "../../api";
import { Sprites } from "../../interfaces";
import { getPokemonInfo, } from "../../utils";

import PokemonPage from "../../components/pokemon/PokemonPage";

export interface PokemonProps {
  id: number;
  name: string;
  sprites: Sprites;
}

const PokemonById: NextPage<PokemonProps> = ({ id, name, sprites }) => {
  return (
    <PokemonPage
      id={id}
      name={name}
      sprites={sprites}
    />
  );
};

export async function getStaticPaths() {
  const data = await loadPokemonList();
  if (typeof data === "string") {
    return { paths: [], fallback: false };
  } else {
    const paths = data.map((item) => {
      const arr = item.url.split("/");
      const id = arr[arr.length - 2];
      return {
        params: { id: id },
      };
    });
    return { paths, fallback: false };
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  return await getPokemonInfo(id);
};

export default PokemonById;
