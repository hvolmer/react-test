import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { Species } from "../types/species";
import { AppContext } from "./app";

/**
 * A list of species
 */
export function SpeciesListContainer(props: SpeciesListProps) {
  const appContext = useContext(AppContext);
  const history = useHistory();

  const speciesItems = props.allSpecies.map(s => {
    const url = encodeURIComponent(s.url);
    return (
      <div key={s.url} onClick={() => {
        appContext.onSelectSpecies(s);
        history.push('characters?species=' + url);
      }}>
        <span className="text-light">{s.name}</span>
      </div>
    )
  });

  return (
    <>
      <SpeciesListNav />
      <Row>
        <Col>
          <div className="card-grid">
            {speciesItems}
          </div>
        </Col>
      </Row>
      <SpeciesListNav />
    </>
  )
}

/**
 * The previous/next pagination buttons
 */
function SpeciesListNav() {
  return (
    <Row className="bg-secondary py-2 my-2">
      <Col>
        <button className="btn btn-sm btn-light" disabled>Prev</button>
        {/* Can't get the ml-2 to work! */}
        &nbsp; 
        <button className="btn btn-sm btn-light ml-2" disabled>Next</button>
      </Col>
    </Row>
  );
}

/**
 * Props for SpeciesList
 */
interface SpeciesListProps {
  allSpecies: Species[];
}
