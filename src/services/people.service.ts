import api, { get } from './api.service';
import { Person, PersonExtended } from "../types/person";
import { SwapiResponse } from '../types/swapi-response';
import { AxiosResponse } from 'axios';

export async function getAll() {
  const r = await api.get<PeopleGetAllResult>('people')
    .catch(e => { throw new Error('Error' + e) });
  return r.data;
}

/**
 * 
 * @returns 
 */
export async function getAllAtOnce() {
  const allPeople: Person[] = [];
  const r1 = await api.get<SwapiResponse<Person>>('people');
  // error handling here
  const data = r1.data;
  allPeople.push(...data.results);
  let nextUrl = data.next;
  while (nextUrl) {
    const nextRes = await get(nextUrl);
    const nextData: SwapiResponse<Person> = nextRes.data;
    allPeople.push(...nextData.results);
    nextUrl = nextData.next;
  }
  return allPeople;
}

export async function populateCharacter(character: Person)
  : Promise<PersonExtended> {

  const filmsPromises: Promise<AxiosResponse<any>>[] = [];
  character.films.forEach(async (url) => filmsPromises.push(get(url)));
  const filmsResults: any[] = await Promise.all(filmsPromises);

  const homeworldResult = await get(character.homeworld);

  const speciesPromises: Promise<AxiosResponse<any>>[] = [];
  character.species.forEach(async (url) => speciesPromises.push(get(url)));
  const speciesResults: any[] = await Promise.all(speciesPromises);

  const starshipsPromises: Promise<AxiosResponse<any>>[] = [];
  character.starships.forEach(async (url) => starshipsPromises.push(get(url)));
  const starshipsResults: any[] = await Promise.all(starshipsPromises);

  const vehiclesPromises: Promise<AxiosResponse<any>>[] = [];
  character.vehicles.forEach(async (url) => vehiclesPromises.push(get(url)));
  const vehiclesResults: any[] = await Promise.all(vehiclesPromises);


  const result: PersonExtended = {
    films: filmsResults.map(r => r.data),
    homeworld: homeworldResult.data,
    species: speciesResults.map(r => r.data),
    starships: starshipsResults.map(r => r.data),
    vehicles: vehiclesResults.map(r => r.data),
  };
  return result;
}


interface PeopleGetAllResult {
  count: number;
  next?: string;
  previous?: string;
  results: Person[];
}