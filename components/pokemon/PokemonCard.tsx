import { ReactElement } from "react";
import { Grid, Card, Text, Row } from "@nextui-org/react";
import Link from "next/link";
import { Pokemon } from "../../interfaces";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps): ReactElement => {
  const { id, name, img } = pokemon;
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
      <Link href={`pokemon/${id}`}>
        <Card isPressable isHoverable variant="bordered">
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src={img}
              objectFit="fill"
              width="100%"
              height={240}
              alt={name}
            />
          </Card.Body>
          <Card.Footer css={{ justifyItems: "flex-start" }}>
            <Row wrap="wrap" justify="space-between" align="center">
              <Link href={`pokemon/name/${name}`}>
                <Text b color="primary" transform="capitalize">
                  {name}
                </Text>
              </Link>
              <Text
                color="primary"
                css={{
                  fontWeight: "$semibold",
                  fontSize: "$md",
                }}
              >
                {`#${id}`}
              </Text>
            </Row>
          </Card.Footer>
        </Card>
      </Link>
    </Grid>
  );
};

export { PokemonCard };
