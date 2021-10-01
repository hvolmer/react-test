import { Col, Row } from "react-bootstrap";
import { Species } from "../types/species";

export function PeopleBySpeciesListHeader(props: PeopleBySpeciesListHeaderProps) {
  return (
    <Row className="p-1 m-1 bg-primary">
      <Col>
        <span className="text-light h5">{props.species.name}</span>
      </Col>
    </Row>
  );
}

interface PeopleBySpeciesListHeaderProps {
  species: Species;
}