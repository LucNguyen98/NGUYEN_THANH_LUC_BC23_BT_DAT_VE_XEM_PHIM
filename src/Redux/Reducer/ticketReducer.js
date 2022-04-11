import { ADD_TICKET, REMOVE_TICKET } from "../types";

const INITIAL_STATE = {
  ticketSelected: [],
};

const ticketReducer = (state = INITIAL_STATE, action) => {
  switch (action?.type) {
    case ADD_TICKET:
      const ticket = action.payload;
      state.ticketSelected.push(ticket);
      return {
        ...state,
        ticketSelected: [...state.ticketSelected],
      };

    case REMOVE_TICKET:
      const idTicket = action.payload;

      return {
        ...state,
        ticketSelected: [...state.ticketSelected].filter(
          (item) => item.soGhe !== idTicket
        ),
      };

    default:
      return state;
  }
};

export default ticketReducer;
