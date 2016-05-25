import React from "react";
import { Link } from "react-router";

export default class Day extends React.Component {
  checkDay(date) {
    if(date == "0") {
      return "hide-day";
    }
  }

  render() {
    const { date } = this.props;

    return (
      <td class={this.checkDay(date)}>{date}</td>
    );
  }
}
