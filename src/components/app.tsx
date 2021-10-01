import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container } from "react-bootstrap";

import { Species } from "../types/species";
import { Person } from "../types/person";
import { getAllAtOnce as getAllSpecies } from "../services/species.service";
import { getAllAtOnce as getAllPeople } from "../services/people.service";
import { PeopleBySpeciesList } from "./people-by-species-list";


export class App extends React.Component<any, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      people: [],
      species: [],
    };
  }

  async componentDidMount() {
    const species = await getAllSpecies();
    this.setState({
      species,
    });

    const people = await getAllPeople();
    this.setState({
      people,
    });
  }

  speciesSelected(s: Species) {
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Species</Link>
              </li>
              <li>
                <Link to="/people">People</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
          <Container fluid="md">
            <Switch>
              <Route exact path="/">
                <PeopleBySpeciesList 
                allSpecies={this.state.species} 
                allPeople={this.state.people}/>
              </Route>
              {/* <Route path="/people-by-species/:id" render={props => 
                <PeopleList allPeople={this.state.people} 
                  allSpecies={this.state.species}
                  speciesId={props.match.params.id}/> }>
              </Route> */}
            </Switch>
          </Container>
        </div>
      </Router>
    )
  }
}

export interface AppState {
  people: Person[];
  species: Species[];
}