import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  function handleSearchChange(event){
    setSearch(event.target.value)
  }

  function handleAddPokemon(newPokemon){
    const newPokemons = [...pokemons, newPokemon ];
    setPokemons(newPokemons)
  }

  useEffect(()=>{
    fetch("http://localhost:3001/pokemon")
    .then(resp=>resp.json())
    .then(data=> setPokemons(data))
  },[])

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon} />
      <br />
      <Search search={search} onSearchChange={handleSearchChange} />
      <br />
      <PokemonCollection pokemons={pokemons} search={search} />
    </Container>
  );
}

export default PokemonPage;
