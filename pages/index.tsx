import { NextPage } from "next";
import { Grid } from "@nextui-org/react";

import { loadPokemonList } from "../api";
import { MainLayout } from "../components/layouts";
import { PokemonCard } from "../components/pokemon";
import { Pokemon } from "../interfaces";

interface NextPageProps {
  items: Pokemon[];
}

const HomePage: NextPage<NextPageProps> = ({ items }) => {
  return (
    <MainLayout title="Pokemon's list">
      <Grid.Container gap={2} justify="center">
        {items.map((item) => (
          <PokemonCard key={item.id} pokemon={item} />
        ))}
      </Grid.Container>
    </MainLayout>
  );
};

export async function getStaticProps() {
  const data = await loadPokemonList();
  if (typeof data === "string") {
    return { props: { items: [] } };
  } else {
    const items: Pokemon[] = data.map((item) => {
      const arr = item.url.split("/");
      const id = arr[arr.length - 2];
      const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
      return { ...item, id, img };
    });
    return { props: { items } };
  }
}

export default HomePage;
