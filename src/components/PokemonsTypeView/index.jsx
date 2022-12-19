import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PokemonCard from '../PokemonCard';
import style from './style.module.css';

// Possible improvements
// - Make a back button by using the `useNavigate()` hook of `react-router-dom`
// - Make a search bar or filter by using `.filter()`

function PokemonsTypeView() {
  const [pokemons, setPokemons] = useState([]);

  // This hook will get our route segment
  //                    👇
  const { typeId } = useParams();

  const fetchPokemons = async (url) => {
    const response = await fetch(url).then((res) => res.json());

    // You can use the .map() for better data structure of response
    setPokemons(response.pokemon);
  };

  useEffect(() => {
    // You can just pass the type ID, and let the `fetchPokemons` make the url
    fetchPokemons(`https://pokeapi.co/api/v2/type/${typeId}`);
  }, [typeId]);

  return (
    <div className={style.container}>
      {pokemons.map(({ pokemon }, index) => (
        <PokemonCard key={`${pokemon.name}-${index}`} name={pokemon.name} />
      ))}
    </div>
  );
}

export default PokemonsTypeView;
