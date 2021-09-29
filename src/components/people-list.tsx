import { Component } from "react";
import { Person } from "../types/person";
import { PeopleListItem } from "./people-list-item";
import { getAll } from "../services/people.service";

export class PeopleList extends Component<any, PeopleListState> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
      people: [],
    };
  }

  async componentDidMount() {
    const r = await getAll();
    this.setState({
      people: r.results,
    });
  }

  render() {
    console.log(this.state)
    const listItems = this.state.people.map((person) =>
      <PeopleListItem key={person.name} person={person} />);

    return (
      <>
        <p>People list below:</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Species</th>
              <th>Height</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            {listItems}
          </tbody>
        </table>
      </>
    )
  }
}

interface PeopleListState {
  count: number;
  next?: string;
  people: Person[];
  previous?: string;
}