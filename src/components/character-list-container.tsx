import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { Person } from "../types/person";

export function CharacterListContainer(props: CharacterListContainerProps) {
  const query = new URLSearchParams(useLocation().search);
  let speciesUrl = query.get('species') || '';
  const [characters, setCharacters] = useState<Person[]>([]);
  useEffect(() => {
    console.log("Will retrieve " + speciesUrl);
    const matchingChars = props.characters.filter(c => c.species.includes(speciesUrl));
    setCharacters(matchingChars);
  }, []);

  const history = useHistory();
  const items = characters.map(c => {
    // I'm using the url and router to try to retain some history
    const id = c.url.split('/').slice(-2)[0];
    return (
      <div key={c.url} onClick={() => history.push(`/characters/${id}`)}>
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

interface CharacterListContainerProps {
  characters: Person[];
}
