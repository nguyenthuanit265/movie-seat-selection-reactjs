import dataFromSystem from "../danhSachGhe.json";
import { BOOKING_SEAT, DELETE_SEAT, PAY_SEAT } from "./type";

const initialState = {
  seatList: dataFromSystem,
  bookingSeatList: [],
};

const movieBookingReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case BOOKING_SEAT: {
      const bookingSeatList = [...state.bookingSeatList];
      const index = bookingSeatList.findIndex(
        (seat) => seat.soGhe === action.payload.soGhe
      );

      // If is exist -> remove (User click to remove book seat)
      if (index !== -1) {
        bookingSeatList.splice(index, 1);
      } else {
        // push booking seat
        bookingSeatList.push(action.payload);
      }

      // Update state bookingSeatList
      state.bookingSeatList = bookingSeatList;
      return { ...state };
    }

    case DELETE_SEAT: {
      const bookingSeatList = [...state.bookingSeatList];
      const index = bookingSeatList.findIndex(
        (seat) => seat.soGhe === action.payload.soGhe
      );

      // If is exist -> remove (User click to remove book seat)
      if (index !== -1) {
        bookingSeatList.splice(index, 1);
      }

      // Update state bookingSeatList
      state.bookingSeatList = bookingSeatList;
      return { ...state };
    }

    case PAY_SEAT: {
      const seatList = [...state.seatList];
      const bookingSeatList = [...state.bookingSeatList];
      if (bookingSeatList.length === 0) {
        alert("User need to select seats to pay!!!");
        return { ...state };
      }

      // Get seat is booking and after update field "daDat"
      const bookingSeats = bookingSeatList.map((seat) => seat.soGhe);
      seatList.map((row) => {
        row.danhSachGhe.map((seat) => {
          if (bookingSeats.includes(seat.soGhe)) {
            seat.daDat = true;
          }
          return seat;
        });
      });

      // Update state
      state.seatList = seatList;
      state.bookingSeatList = [];
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default movieBookingReducer;
