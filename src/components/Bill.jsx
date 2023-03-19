import React, { Component } from "react";
import { connect } from "react-redux";
import { actDeleteSeat, actPaySeat } from "./duck/action";

class Bill extends Component {
  renderBill = () => {
    const { bookingSeatList } = this.props;
    return bookingSeatList.map((seat, index) => {
      return (
        <tr key={seat.soGhe}>
          <td>{index + 1}</td>
          <td>{seat.soGhe}</td>
          <td>{seat.gia.toLocaleString()} VNĐ</td>
          <td>
            <button
              style={{
                color: "red",
                fontWeight: "bold",
                backgroundColor: "transparent",
                border: "none",
              }}
              onClick={() => {
                this.props.onDeleteSeat(seat);
              }}
            >
              x
            </button>
          </td>
        </tr>
      );
    });
  };

  totalMoney = () => {
    const { bookingSeatList } = this.props;
    return bookingSeatList.reduce((sum, seat) => {
      return (sum += seat.gia);
    }, 0);
  };
  render() {
    return (
      <div className="mt-4" style={{ color: "white", fontWeight: "bold" }}>
        <h3>Danh sách ghế đang chọn</h3>
        <div className="mt-3">
          <div className="d-flex">
            <button className="btn seat" disabled></button>{" "}
            <p className="ml-4"> Ghế có thể đặt</p>
          </div>
          <div className="d-flex mt-3">
            <button className="btn seat booking" disabled></button>{" "}
            <p className="ml-4"> Ghế đang chọn</p>
          </div>
          <div className="d-flex mt-3">
            <button className="btn seat booked" disabled></button>{" "}
            <p className="ml-4"> Ghế đã được đặt</p>
          </div>
        </div>

        <div className="mt-5">
          <table
            className="table"
            style={{ color: "white", fontWeight: "bold" }}
          >
            <thead>
              <tr>
                <td>Số thứ tự</td>
                <td>Số ghế</td>
                <td>Giá tiền</td>
                <td>Hủy</td>
              </tr>
            </thead>
            <tbody>{this.renderBill()}</tbody>
          </table>

          <div className="mt-4">
            Tổng Tiền: {this.totalMoney().toLocaleString()} VNĐ
          </div>

          <button
            className="btn btn-success mt-4"
            onClick={() => {
              this.props.onPay();
            }}
          >
            Thanh toán
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bookingSeatList: state.movieBookingReducer.bookingSeatList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPay: () => {
      const action = actPaySeat();
      dispatch(action);
    },

    onDeleteSeat: (seat) => {
      console.log("onDeleteSeat: ", seat);
      const action = actDeleteSeat(seat);
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Bill);
