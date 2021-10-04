import { useContext } from "react"
import { Col, Row } from "react-bootstrap";
import { AppContext } from "./app"

export function CharacterDetail(props: any) {
  const appContext = useContext(AppContext);
  const char = appContext.selectedCharacter;
  if (!char) { throw new Error(); }

  console.log('DETAIL!')
  console.log(char);
  return (
    <div>
      <p>Character detail...</p>
      <CharacterItem name="Name" value={char.name} />
      <CharacterItem name="Birth Year" value={char.birth_year} />
      <CharacterItem name="Eye Color" value={char.eye_color} />
      <CharacterItem name="Gender" value={char.gender} />
      <CharacterItem name="Hair Color" value={char.hair_color} />
      <CharacterItem name="Height" value={char.height + ' cm'} />
      <CharacterItem name="Home World" value={char.homeworld} />
      <CharacterItem name="Mass" value={char.mass} />
      <CharacterItem name="Skin Color" value={char.skin_color} />
      <CharacterItem name="Species" value={char.species.toString()} />
      <CharacterItem name="Starships" value={char.starships.toString()} />
      <CharacterItem name="Vehicles" value={char.vehicles.toString()} />
      <CharacterItem name="Films" value={char.films.toString()} />
      
    </div>
  )
}

function CharacterItem(props: CharacterItemProps) {
  return (
    <Row className="mb-2">
      <Col xs="12" sm="4" lg="3">
        {props.name}
      </Col>
      <Col xs="12" sm="8">
        <strong>{props.value}
        </strong>
      </Col>
    </Row>
  );
}

interface CharacterItemProps {
  name: string;
  value: string;
}