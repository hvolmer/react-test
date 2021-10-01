import axios from "axios";

const prefix = 'https://swapi.dev/api/';

export default axios.create({
  baseURL: prefix,
});

export async function get(url: string) {
  return await axios.get(url);
}