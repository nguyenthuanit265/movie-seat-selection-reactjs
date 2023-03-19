import { BOOKING_SEAT, DELETE_SEAT, PAY_SEAT } from "./type";

export const actBookingSeat = (seat) => {
  return {
    type: BOOKING_SEAT,
    payload: seat,
  };
};

export const actPaySeat = () => {
  return {
    type: PAY_SEAT,
  };
};

export const actDeleteSeat = (seat) => {
  return {
    type: DELETE_SEAT,
    payload: seat,
  };
};
