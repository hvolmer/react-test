export interface SwapiResponse<T = any> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}