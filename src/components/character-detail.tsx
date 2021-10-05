import { useContext, useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap";
import { AppContext } from "./app"
import { populateCharacter } from "../services/people.service";
import { PersonExtended } from "../types/person";


/**
 * Character detail component
 */
export function CharacterDetail(props: any) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [charExtended, setCharExtended] = useState<PersonExtended>({
    films: [],
    homeworld: '',
    species: [],
    starships: [],
    vehicles: [],
  });

  const appContext = useContext(AppContext);
  const char = appContext.selectedCharacter;
  if (!char) { throw new Error(); }

  useEffect(() => {
    populateCharacter(char).then(c => {
      console.log(c);
      setCharExtended(c);
      setIsLoaded(true);
    });
  }, [char]);

  return (
    <div>
      <p>Character detail...</p>
      <CharacterItem name="Name" value={char.name} />
      <CharacterItem name="Birth Year" value={char.birth_year} />
      <CharacterItem name="Eye Color" value={char.eye_color} />
      <CharacterItem name="Gender" value={char.gender} />
      <CharacterItem name="Hair Color" value={char.hair_color} />
      <CharacterItem name="Height" value={char.height + ' cm'} />
      <CharacterItem name="Mass" value={char.mass} />
      <CharacterItem name="Skin Color" value={char.skin_color} />
      {isLoaded &&
        <>
          <CharacterItem name="Home World" value={charExtended.homeworld.name} />
          <CharacterItem name="Species" value={charExtended.species} arrayKey="name" />
          <CharacterItem name="Starships" value={charExtended.starships} arrayKey="name" />
          <CharacterItem name="Vehicles" value={charExtended.vehicles} arrayKey="name" />
          <CharacterItem name="Films" value={charExtended.films} arrayKey="title" />
        </>
      }
    </div>
  )
}

/**
 * Individual, simplistic character data rows
 */
function CharacterItem(props: CharacterItemProps) {
  let value = props.value;
  if (Array.isArray(value) && props.arrayKey) {
    value = value.map(v => v[props.arrayKey!]).join(', ');
  }
  return (
    <Row className="mb-2">
      <Col xs="12" sm="4" lg="3">
        {props.name}
      </Col>
      <Col xs="12" sm="8">
        <strong>{value}
        </strong>
      </Col>
    </Row>
  );
}

/**
 * Props for individual row items
 */
interface CharacterItemProps {
  name: string;
  value: string | Array<any>;
  arrayKey?: string;
}