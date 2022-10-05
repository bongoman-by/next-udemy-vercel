import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import { NextPage } from "next";

import confetti from "canvas-confetti";

import { Sprites } from "../../interfaces";
import { toggleFavorites } from "../../utils";
import { isFavorite } from "../../utils/localFavorites";
import { PokemonInfo } from ".";

export interface PokemonProps {
  name: string;
  id: number;
  sprites: Sprites;
}

const PokemonPage: NextPage<PokemonProps> = ({ id, name, sprites }) => {
  const router = useRouter();
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setFavorite(isFavorite(id));
  }, [id]);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  if (id < 0) {
    return <div>An unexpected error occurred in PokemonPage.tsx</div>;
  }

  const toggleFavorite = (): void => {
    toggleFavorites(id);
    setFavorite(isFavorite(id));
    if (favorite) return;
    confetti({
      zIndex: 999,
      particleCount: 100,
      origin: {
        x: 0.9,
        y: 0.2,
      },
      shapes: ["circle"],
    });
  };

  return (
    <PokemonInfo
      name={name}
      sprites={sprites}
      favorite={favorite}
      toggleFavorite={toggleFavorite}
    />
  );
};

export default PokemonPage;
