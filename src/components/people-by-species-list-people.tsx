import { Col, Row } from "react-bootstrap";
import { Person } from "../types/person";

export function PeopleBySpeciesListPeople(props: PeopleBySpeciesListPeopleProps) {
  const peopleItems = props.people.map(p => (
    <div key={p.url}>
      <span className="text-light">{p.name}</span>
    </div>
  ));
  return (
    <Row>
      <Col>
        <div className="card-grid">
          {peopleItems}
        </div>
      </Col>
    </Row>
  );
}

interface PeopleBySpeciesListPeopleProps {
  people: Person[];
}