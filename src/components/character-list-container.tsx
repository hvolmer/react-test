import { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { Person } from "../types/person";
import { AppContext, AppContextProps } from "./app";

/**
 * A list of characters
 */
export function CharacterListContainer(props: CharacterListContainerProps) {
  const appContext = useContext<AppContextProps>(AppContext);

  if (!appContext.selectedSpecies) { throw new Error() }

  let speciesUrl = appContext.selectedSpecies?.url; // query.get('species') || '';
  const [characters, setCharacters] = useState<Person[]>([]);
  useEffect(() => {
    const matchingCharacters = props.characters.filter(c => c.species.includes(speciesUrl));
    setCharacters(matchingCharacters);
    // Not sure how else to make this nuisance warning go away without invoking 
    // endless state changes
    // eslint-disable-next-line
  }, []);

  const history = useHistory();
  const items = characters.map(c => {
    // I'm using the url and router to try to retain some history`
    const id = c.url.split('/').slice(-2)[0];
    return (
      <div key={c.url} onClick={() => {
        appContext.onSelectCharacter(c);
        history.push(`/characters/${id}`);
      }}>
        <span className="text-light">{c.name}</span>
      </div>
    )
  });

  return (
    <div>
      <ListNav />
      <Row>
        <Col>
          <div className="card-grid">
            {items}
          </div>
        </Col>
      </Row>
      <ListNav />
    </div>
  );
}

/**
 * Pagination buttons for list (do not work yet)
 */
function ListNav() {
  return (
    <Row className="bg-secondary py-2 my-2">
      <Col>
        <button className="btn btn-sm btn-light">Prev</button>
        {/* Can't get the ml-2 to work! */}
        &nbsp;
        <button className="btn btn-sm btn-light ml-2">Next</button>
      </Col>
    </Row>
  );
}

/**
 * Props for the character list
 */
interface CharacterListContainerProps {
  characters: Person[];
}