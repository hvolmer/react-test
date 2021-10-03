import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useLocation } from "react-router";
import apiService from "../services/api.service";
import { Person } from "../types/person";

export function CharacterListContainer(props: CharacterListContainerProps) {
  const query = new URLSearchParams(useLocation().search);
  let species = query.get('species');
  const [characters, setCharacters] = useState<Person[]>([]);
  useEffect(() => {
    console.log("Will retrieve " + species);
    (async () => {
      const { data } = await apiService.get(species!);
    })();
  });

  return (
    <div>
      <p>People list container... Species: {species}</p>
      <Row className="bg-primary py-2 mb-2">
        <Col>
          <button className="btn btn-sm btn-light">Prev</button>
          <button className="btn btn-sm btn-light ml-2">Next</button>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="card-grid">
            {characters}
          </div>
        </Col>
      </Row>
      <Row className="bg-primary py-2 my-2">
        <Col>
          <button className="btn btn-sm btn-light">Prev</button>
          <button className="btn btn-sm btn-light ml-2">Next</button>
        </Col>
      </Row>
    </div>
  );
}

interface CharacterListContainerProps {
  characters: Person[];
}
