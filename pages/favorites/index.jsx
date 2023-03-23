import { useEffect, useState } from "react";

import { NoFavorites } from "../../components/ui/NoFavorites";
import { Layout } from "../../components/layouts/Layout"
import { localFavorites } from "@/utils";
import { FavoritePokemons } from "@/components/pokemon/FavoritePokemons";

const FavoritesPage = () => {
  
  
  const [favoritePokemons, setFavoritePokemons] = useState([]);
  
  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);
  
  return (
        <Layout title='Pokémons - Favoritos'>

          {
            favoritePokemons.length === 0
            ? (<NoFavorites/>)
            : (
                <FavoritePokemons
                  pokemons={favoritePokemons}
                />
            )

          }

        </Layout>
    )
};

export default FavoritesPage;
