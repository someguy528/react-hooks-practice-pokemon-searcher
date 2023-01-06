import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onAddPokemon}) {

  const [form, setForm] = useState({
    name: "",
    hp: 0,
    frontUrl : "" ,
    backUrl : "" ,
    }
  )

  function handleFormChange(event){
    const name = event.target.name ;
    let value = event.target.value ; 
    if (name === "hp"){
      value = parseFloat(value)}
    setForm({
      ...form,
      [name] : value
    })
    console.log(form)
  }

  function handleFormSubmit(event){
    event.preventDefault()
    const newPokemon = {
      name: form.name,
      hp: form.hp,
      sprites: {
        front: form.frontUrl,
        back: form.backUrl,
      }
    }
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newPokemon)
    })
    .then(resp=> resp.json())
    .then(data => {
      console.log(data);
      onAddPokemon(data)})
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleFormSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={handleFormChange} value={form.name} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input onChange={handleFormChange} value={form.hp} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleFormChange}
            value={form.frontUrl}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleFormChange}
            value={form.backUrl}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
