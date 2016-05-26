import React from "react";
import { Link } from "react-router";

export default class Day extends React.Component {
  checkDay(date, current) {
    if(date == "0") {
      return "hide-day";
    }
    else if(date == current) {
      return "current-day";
    }
    else {
      return;
    }
  }

  render() {
    const { date } = this.props;
    const { current} = this.props;

    return (
      <td class={this.checkDay(date, current)}>{date}</td>
    );
  }
}
