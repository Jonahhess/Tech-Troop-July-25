import * as view from "./view.js";

const reservations = {};

export const initializeReservations = () => {
  view.renderModel(reservations);
};

// this is our model

// in proper MVU, the modify functions should be wholly inside update, and the view watches for modifications to the model automatically.
// since the view is not watching the model, we need to call the view after each modification
export const addReservation = (fname, claimed) => {
  reservations[fname] = { claimed: claimed };
  view.renderModel(reservations);
};

export const claimReservation = (fname) => {
  if (fname in reservations && !reservations[fname].claimed) {
    reservations[fname].claimed = true;
    view.renderModel(reservations);
  }
};
