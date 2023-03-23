import { Grid } from "@nextui-org/react";
import { FavoriteCardPokemon } from "../pokemon/FavoriteCardPokemon";


export const FavoritePokemons = ({pokemons}) => {
  return (
    <Grid.Container gap={2} direction='row' justify="flex-start">
      {
        pokemons.map(id => (
          <FavoriteCardPokemon
            key={id}
            pokemonId={id}
          />
        ))
      }
    </Grid.Container>
  )
};
