import React, { Component } from "react";
import { connect } from "react-redux";
import Seat from "./Seat";

class SeatList extends Component {
  renderSeatList = () => {
    const { seatList } = this.props;
    console.log(seatList);
    return seatList.map((row) => {
      return (
        <div
          key={row.hang}
          className="mt-3 d-flex align-items-center"
          style={{ gap: "20px" }}
        >
          <span style={{ width: "20px", color: "yellow", fontWeight: "bold" }}>
            {row.hang}
          </span>

          <div className="d-flex align-items-center" style={{ gap: "20px" }}>
            {row.danhSachGhe.map((seat) => {
              return (
                <Seat
                  key={seat.soGhe}
                  seat={seat}
                  isRowEmpty={row.hang === "" ? true : false}
                />
              );
            })}
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div
          className="text-center"
          style={{
            color: "white",
            fontWeight: "10px",
          }}
        >
          <h2 style={{ fontWeight: "bold", color: "orange" }}>
            Đặt vé xem phim
          </h2>
          <p style={{ fontWeight: "bold" }}>Màn hình</p>
          <div
            style={{
              backgroundColor: "orange",
              height: "50px",
              boxShadow: "0px 5px 5px silver",
            }}
          ></div>
        </div>

        <div>{this.renderSeatList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    seatList: state.movieBookingReducer.seatList,
  };
};
export default connect(mapStateToProps, null)(SeatList);
