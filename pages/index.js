import pokeApi from "@/api/pokeApi";
import { PokemonCard } from "@/components/pokemon/PokemonCard";
import { Grid} from "@nextui-org/react";
import { Layout } from "../components/layouts/Layout"



const HomePage = ({pokemons}) => {
    
  
  return (
    <Layout title='Listado de Pokemons'>
      
      <Grid.Container gap={2} justify="flex-start">
        {
          pokemons.map( (pokemon) =>(
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
            />
          ))
        }
      </Grid.Container>

    </Layout>
  )
}


export const getStaticProps = async (ctx) => {

  const {data} = await pokeApi.get('/pokemon?limit=151');


  const pokemons = data.results.map( (poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1 }.svg`
  }))
  

  return {
    props: {
      pokemons: pokemons
    }
  }
}

export default HomePage
