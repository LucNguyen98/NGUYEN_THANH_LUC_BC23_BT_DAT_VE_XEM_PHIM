export const ticketSelectedSelector = (rootState) =>
  rootState.ticketReducer.ticketSelected;

export const ticketTotalSelector = (rootState) => {
  const ticketSelected = rootState.ticketReducer.ticketSelected || [];
  return ticketSelected.reduce((acc, current) => {
    return acc + parseFloat(current?.gia);
  }, 0);
};
