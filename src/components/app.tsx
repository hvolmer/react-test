import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Container } from "react-bootstrap";

import { Species } from "../types/species";
import { Person } from "../types/person";
import { getAllAtOnce as getAllSpecies } from "../services/species.service";
import { getAllAtOnce as getAllPeople } from "../services/people.service";
import { SpeciesListContainer } from "./species-list-container";
import { CharacterListContainer } from "./character-list-container";
import { AppBreadcrumbs } from "./app-breadcrumbs";

export class App extends React.Component<any, AppState> {

  currentSpeciesUrl: string = '';

  constructor(props: any) {
    super(props);
    this.state = {
      peopleLoaded: false,
      people: [],
      selectedSpecies: null,
      species: [],
    }
  }

  async componentDidMount() {
    const allSpecies = await getAllSpecies();
    this.setState({
      species: allSpecies,
    });
    // Let this happen on its own time
    getAllPeople().then(p => {
      this.setState({
        people: p,
        peopleLoaded: true,
      });
    });
  }

  render() {
    return (
      <>
        <Router>
          <div>
            <Container fluid="md">
              <AppBreadcrumbs species={this.state.species} />

              <Switch>
                <Route exact path="/">
                  <SpeciesListContainer allSpecies={this.state.species} />
                </Route>
                <Route path="/characters">
                  <CharacterListContainer characters={this.state.people} />
                </Route>
              </Switch>
            </Container>
          </div>
        </Router>
      </>
    );
  }
}

export interface AppState {
  peopleLoaded: boolean;
  people: Person[];
  selectedSpecies: Species | null;
  species: Species[];
}

export interface PeopleContext {
  people: Person[];
  peopleLoaded: boolean;
}