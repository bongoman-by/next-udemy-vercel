import { NextPage } from "next";
import { useEffect, useState } from "react";
import { Grid } from "@nextui-org/react";

import { MainLayout } from "../../components/layouts";
import { loadPokemonList } from "../../api";
import { Pokemon } from "../../interfaces";
import { getFavorites } from "../../utils";
import { PokemonCard } from "../../components/pokemon";
import { EmptyFavorites } from "../../components/ui";

const FavoritesPage: NextPage = () => {
  const [items, setItems] = useState([] as Pokemon[]);

  useEffect(() => {
    const response = loadPokemonList() as Promise<Pokemon[]>;
    response.then((data) => {
      if (typeof data !== "string") {
        const favorites = getFavorites();

        const items: Pokemon[] = [];
        data.forEach((item) => {
          const arr = item.url.split("/");
          const id = arr[arr.length - 2];
          if (favorites.includes(+id)) {
            const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
            items.push({ ...item, id, img });
          }
        });
        setItems(items);
      }
    });
  }, []);

  return (
    <MainLayout title="Favorites">
      <>
        {items.length === 0 && <EmptyFavorites />}
        <Grid.Container gap={2} justify="center">
          {items.map((item) => (
            <PokemonCard key={item.id} pokemon={item} />
          ))}
        </Grid.Container>
      </>
    </MainLayout>
  );
};

export default FavoritesPage;
