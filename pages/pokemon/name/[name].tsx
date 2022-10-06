import { GetStaticProps, NextPage } from "next";

import { loadPokemonList } from "../../../api";
import { Sprites } from "../../../interfaces";
import { getPokemonInfo } from "../../../utils";
import PokemonPage from "../../../components/pokemon/PokemonPage";

export interface PokemonProps {
  name: string;
  id: number;
  sprites: Sprites;
}

const PokemonPageByName: NextPage<PokemonProps> = ({ id, name, sprites }) => {
  return <PokemonPage id={id} name={name} sprites={sprites} />;
};

export async function getStaticPaths() {
  const data = await loadPokemonList();
  if (typeof data === "string") {
    return { paths: [], fallback: false };
  } else {
    const paths = data.map(({ name }) => {
      return {
        params: { name },
      };
    });
    return { paths, fallback: "blocking" };
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  const res = await getPokemonInfo(name);
  if (!res) {
    return {
        notFound: true,
    };
  }
  return res;
};

export default PokemonPageByName;
