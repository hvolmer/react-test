import api, { get } from './api.service';
import { Person } from "../types/person";
import { SwapiResponse } from '../types/swapi-response';

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


interface PeopleGetAllResult {
  count: number;
  next?: string;
  previous?: string;
  results: Person[];
}