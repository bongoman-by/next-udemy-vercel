import Image from "next/image";

export const Logo = () => (
  <div style={{ position: "relative", width: "6rem", height: "6rem" }}>
    <Image
      alt="pokemon-logo"
      src={
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
      }
      layout="fill"
      objectFit="cover"
      priority={true}
    />
  </div>
);
