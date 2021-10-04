/**
 * A helper service for api calls. Default export is an axios client
 */

import axios from "axios";

const prefix = 'https://swapi.dev/api/';

/**
 * An axios client
 */
export default axios.create({
  baseURL: prefix,
});

/**
 * A get helper
 */
export async function get(url: string) {
  return await axios.get(url);
}