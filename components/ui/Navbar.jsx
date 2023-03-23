import { Link, Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";

export const Navbar = () => {
  
  const {theme} = useTheme();
  
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0px 20px',
      backgroundColor: theme.colors.gray900.value
    }}>

      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png"
        alt="icono de la app"
        width={60}
        height={60}
      />

      <NextLink href='/' passHref>
        <div style={{ display:'flex', alignItems:'center', justifyContent: 'space-between' }}>
          <Text color="white" h2>P</Text>
          <Text color="white" h3>okémon</Text>       
        </div>
      </NextLink>

      <Spacer css={{flex: 1}}/>

      <NextLink href='/favorites' passHref>
        <div>
          <Text color="white" h3>Favoritos</Text> 
        </div>
      </NextLink>
    </div>
  )
};
