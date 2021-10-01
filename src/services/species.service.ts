import { Species } from '../types/species';
import { SwapiResponse } from '../types/swapi-response';
import api, { get } from './api.service';

/**
 * 
 * @returns Response object with a page of Species and links to next
 */
export async function getAll(urls?:NextPrevUrls) {
  const r = await api.get<SwapiResponse<Species>>('species');
  return r.data;
}

/**
 * 
 * @returns 
 */
export async function getAllAtOnce() {
  const allSpecies: Species[] = [];
  const noneSpecies: Partial<Species> = {
    name: "No species",
    url: "",
  };
  allSpecies.push(noneSpecies as Species);
  const r1 = await api.get<SwapiResponse<Species>>('species');
  // error handling here
  const data = r1.data;
  allSpecies.push(...data.results);
  let nextUrl = data.next;
  while (nextUrl) {
    const nextRes = await get(nextUrl);
    const nextData: SwapiResponse<Species> = nextRes.data;
    allSpecies.push(...nextData.results);
    nextUrl = nextData.next;
  }
  return allSpecies;
}

export interface NextPrevUrls {
  next?: string;
  previous: string;
}