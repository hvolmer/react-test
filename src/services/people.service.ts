import axios from "axios";
import { Person } from "../types/person";

const prefix = 'https://swapi.dev/api/';

export async function getAll() {
  const r = await axios.get<PeopleGetAllResult>(prefix + 'people')
    .catch(e => { throw new Error('Error' + e )});
  return r.data;
}

interface PeopleGetAllResult {
  count: number;
  next?: string;
  previous?: string;
  results: Person[];
}