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
  view.printReservationStatus(
    `Reservation for '${fname}' added successfully ${
      claimed ? " and is claimed." : "!"
    }`
  );
};

export const claimReservation = (fname) => {
  if (!(fname in reservations)) {
    view.printReservationStatus(
      `Sorry, there is no reservation under '${fname}'`
    );
    return;
  }

  if (reservations[fname].claimed) {
    view.printReservationStatus(
      `The reservation under '${fname}' has already been claimed`
    );
    return;
  }
  reservations[fname].claimed = true;
  view.renderModel(reservations);
  view.printReservationStatus(`Welcome, ${fname}`);
};
