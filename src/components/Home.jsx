import React, { Component } from "react";
import Bill from "./Bill";
import Seat from "./SeatList";
import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid home">
        <div className="overlay"></div>
        <div className="row">
          <div className="col-sm-8">
            <Seat />
          </div>
          <div className="col-sm-4">
            <Bill />
          </div>
        </div>
      </div>
    );
  }
}
