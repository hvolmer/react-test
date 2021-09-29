import axios from "axios";
import { Person } from "../types/person";

const prefix = 'https://swapi.dev/api/';

export async function getAll() {
  const r = await axios.get<Person[]>(prefix + 'person')
    .catch(e => { throw ('Error' + e )});
  return r.data;
}