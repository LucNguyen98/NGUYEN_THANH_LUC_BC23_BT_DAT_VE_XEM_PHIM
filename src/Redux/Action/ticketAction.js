import { ADD_TICKET, REMOVE_TICKET } from "../types";

export const addTicket = (ticket) => {
  return {
    type: ADD_TICKET,
    payload: ticket,
  };
};

export const removeTicket = (idTicket) => {
  return {
    type: REMOVE_TICKET,
    payload: idTicket,
  };
};
