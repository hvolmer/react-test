import { Person } from "../types/person";

export function PeopleListItem(props: PeopleListItemProps) {
  const person = props.person;
  return (
    <>
      <tr>
        <td>{person.name}</td>
        <td>{person.species}</td>
        <td>{person.height}</td>
        <td>{person.mass}</td>
      </tr>
    </>
  );
}

export interface PeopleListItemProps {
  person: Person;
}