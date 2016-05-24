import React from "react";
import { Link } from "react-router";

export default class Day extends React.Component {
  render() {
    const { date } = this.props;

    return (
      <td>{date}</td>
    );
  }
}
