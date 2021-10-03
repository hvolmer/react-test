import { Person } from "../types/person";
import { Species } from "../types/species";
import { PeopleBySpeciesListHeader } from "./people-by-species-list-head";
import { PeopleBySpeciesListPeople } from "./people-by-species-list-people";

export function PeopleBySpeciesList(props: PeopleBySpeciesListProps) {
  const items: SpeciesItem[] = props.allSpecies.map(species => {
    const people = props.allPeople.filter(p => {
      if (!species.url) {
        return !p.species.length;
      } else {
        return p.species.includes(species.url);
      }
    });

    return {
      species,
      people,
    };
  });

  const speciesList = items.map(i =>
    <div key={i.species.url}>
      <PeopleBySpeciesListHeader species={i.species} />
      <PeopleBySpeciesListPeople people={i.people} />
    </div>
  );
  return (
    <>
      {speciesList}
    </>
  );
}

export interface PeopleBySpeciesListProps {
  allSpecies: Species[];
  allPeople: Person[];
}

export interface SpeciesItem {
  species: Species;
  people: Person[];
}
