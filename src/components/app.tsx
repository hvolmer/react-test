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
import { CharacterDetail } from "./character-detail";
import { AppSearch } from "./app-search";

/**
 * Context for supporting child components without passing props
 */
export const AppContext = React.createContext<AppContextProps>({
  onSelectCharacter: (c) => { },
  onSelectSpecies: (c) => { },
});

/**
 * The main component
 */
export class App extends React.Component<any, AppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      peopleLoaded: false,
      people: [],
      selectedCharacter: null,
      selectedSpecies: null,
      species: [],
    }
  }

  /**
   * 
   */
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

  /**
   * Context callback from child component
   */
  onSelectCharacter = (c: Person) => {
    console.log("ON SELECT CHARACTER", c);
    this.setState({
      selectedCharacter: c,
    });
  }

  /**
   * Context callback from child component
   */
  onSelectSpecies = (s: Species) => {
    this.setState({
      selectedSpecies: s,
    });
  }

  /**
   * 
   */
  render() {
    const isLoaded = this.state.species.length > 0;
    return (
      <>
        {isLoaded && <AppContext.Provider value={{
          onSelectCharacter: this.onSelectCharacter,
          onSelectSpecies: this.onSelectSpecies,
          selectedCharacter: this.state.selectedCharacter,
          selectedSpecies: this.state.selectedSpecies,
        }}>
          <Router>
            <Container fluid="md">
              <div className="mt-4">
                <div className="d-inline">
                  <strong>Star Wars Characters</strong>
                  <span className="mx-2">|</span>
                  <AppBreadcrumbs />
                </div>
              </div>
              {/* <AppSearch /> */}
              <Switch>
                <Route exact path="/">
                  <SpeciesListContainer allSpecies={this.state.species} />
                </Route>
                <Route exact path="/characters">
                  <CharacterListContainer characters={this.state.people} />
                </Route>
                <Route path="/characters/:characterId">
                  <CharacterDetail />
                </Route>
              </Switch>
            </Container>
          </Router>
        </AppContext.Provider>
        }
      </>
    );
  }
}

/**
 * Main application state
 */
export interface AppState {
  peopleLoaded: boolean;
  people: Person[];
  selectedCharacter: Person | null;
  selectedSpecies: Species | null;
  species: Species[];
}

/**
 * Properties and callbacks for the AppContext
 */
export interface AppContextProps {
  onSelectCharacter: (p: Person) => void;
  onSelectSpecies: (s: Species) => void;
  selectedCharacter?: Person | null;
  selectedSpecies?: Species | null;
}