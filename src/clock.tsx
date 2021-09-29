import React from "react";

/** */
export interface ClockState {
  date: Date;
}

/** */
export class Clock extends React.Component<any, ClockState> {

  timerID: NodeJS.Timer | undefined;

  constructor(props: any) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  /** */
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000);
  }

  /** */
  componentWillUnmount() {
    if(!this.timerID) { return; }
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }
}