import { NextPage } from "next";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";

import { MainLayout } from "../../components/layouts";
import { Sprites } from "../../interfaces";

export interface PokemonInfoProps {
  name: string;
  sprites: Sprites;
  favorite: boolean;
  toggleFavorite: () => void;
}

export const PokemonInfo: NextPage<PokemonInfoProps> = ({
  name,
  sprites,
  favorite,
  toggleFavorite,
}) => {
 
  return (
    <MainLayout title={name}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  sprites.other?.dream_world.front_default || "/no-image.png"
                }
                alt={name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 transform="capitalize">
                {name}
              </Text>

              <Button
                color="gradient"
                ghost={!favorite}
                onPress={toggleFavorite}
              >
                {favorite ? "Delete from favorites" : "Save in favorites"}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>

              <Container direction="row" display="flex" gap={0}>
                <Image
                  src={sprites.front_default}
                  alt={name}
                  width={100}
                  height={100}
                />
                <Image
                  src={sprites.back_default}
                  alt={name}
                  width={100}
                  height={100}
                />
                <Image
                  src={sprites.front_shiny}
                  alt={name}
                  width={100}
                  height={100}
                />
                <Image
                  src={sprites.back_shiny}
                  alt={name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </MainLayout>
  );
};

export default PokemonInfo;
