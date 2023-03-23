import { useState } from "react";

import localFavorites from "@/utils/localFavorites";
import { Layout } from "../../components/layouts/Layout"
import pokeApi from "@/api/pokeApi";

import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { getPokemonInfo } from "@/utils";

export const PokemonNamePage = ({pokemon}) => {
  const [isInFavorites, setIsInFavorites] = useState(localFavorites.existInFavorites(pokemon.name));
  
  
  const onTogleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.name);
    setIsInFavorites(!isInFavorites)
  }
  
  
  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{marginTop: '5px'}} gap={2}>
        <Grid xs={12} sm={4} >
          <Card hoverable css={{padding: '30px'}}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other.dream_world.front_default || '/no-image.png'}
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{display: 'flex', justifyContent: 'space-between'}}>
              <Text h1 transform="capitalize">{pokemon.name}</Text>

              <Button
                color="gradient"
                ghost={!isInFavorites}
                onClick={onTogleFavorite}
              >
                {isInFavorites ? 'Guardado' : 'Agregar en Favoritos'}
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container 
                direction='row' 
                display='flex'
                gap={0}
              >

                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />

                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>


          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
};

export const getStaticPaths = async (ctx) => {

  const {data} = await pokeApi.get('/pokemon?limit=151');

  const pokemonsName = data.results.map( (poke, i) => (
    poke.name
  ))    

  return {
    paths: pokemonsName.map(name => ({
      params: {name: name}
    })),
    fallback: false
  }
}


export const getStaticProps = async ({params}) => {    //desestructuro los params de ctx (context)  

  const {name} = params;

  return {
    props: {
      pokemon: await getPokemonInfo(name)
    }
  }
}

export default PokemonNamePage
