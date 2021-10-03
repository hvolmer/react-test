import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { Species } from "../types/species";


export function SpeciesListContainer(props: SpeciesListProps) {
  const history = useHistory();

  const speciesItems = props.allSpecies.map(s => {
    const url = encodeURIComponent(s.url);
    return (
      <div key={s.url} onClick={() => history.push('characters?species=' + url)}>
        <span className="text-light">{s.name}</span>
      </div>
    )
  });

  return (
    <div>
      <Row className="bg-primary py-2 mb-2">
        <Col>
          <button className="btn btn-sm btn-light">Prev</button>
          <button className="btn btn-sm btn-light ml-2">Next</button>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="card-grid">
            {speciesItems}
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
  )
}

interface SpeciesListProps {
  allSpecies: Species[];
}
