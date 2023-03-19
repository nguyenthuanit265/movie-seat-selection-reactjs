import clsx from "clsx";
import React, { Component } from "react";
import { connect } from "react-redux";
import { actBookingSeat } from "./duck/action";
import "./seat.css";
class Seat extends Component {
  render() {
    const { seat, isRowEmpty, bookingSeatList } = this.props;
    return (
      <div>
        {isRowEmpty ? (
          <button className="seat-init">{seat.soGhe}</button>
        ) : (
          <button
            className={clsx("seat", {
              booked: seat.daDat,
              booking: bookingSeatList.find((item) => item.soGhe === seat.soGhe)
                ? true
                : false,
            })}
            disabled={seat.daDat}
            onClick={() => this.props.onBookingSeat(seat)}
          >
            {seat.soGhe.substring(1)}
          </button>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBookingSeat: (seat) => {
      const action = actBookingSeat(seat);
      dispatch(action);
    },
  };
};

const mapStateToProps = (state) => {
  return {
    bookingSeatList: state.movieBookingReducer.bookingSeatList,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Seat);
