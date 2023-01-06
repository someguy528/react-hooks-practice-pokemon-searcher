import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {

  let {id, name, hp, sprites} = pokemon;

  const [isClicked, setClick] = useState(false);

  function handleClick(){
    setClick((isClicked) => (!isClicked))
  }

  return (
    <Card>
      <div onClick={handleClick} >
        <div className="image">
          <img src={!isClicked ? sprites.front : sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
