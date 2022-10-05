import { Container, Card, Row, Text } from "@nextui-org/react";

const EmptyFavorites = () => {
  return (
    <Container xs>
      <Card css={{ mt: "$sm" }}>
        <Card.Body>
          <Row justify="center" align="center">
            <Text h2 color="white" css={{ m: 0 }}>
              Favorite list is empty
            </Text>
          </Row>
          <Card.Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg`}
            objectFit="fill"
            width="100%"
            height={140}
            alt="pokemon image"
          />
        </Card.Body>
      </Card>
    </Container>
  );
};

export { EmptyFavorites };
