import * as model from "./model.js";

// called on DOMContentLoaded event
export const initialize = () => model.initializeReservations();

// listened to by view - on click add button
export const addReservation = () => {
  const addInput = document.getElementById("add-name");
  const fname = addInput.value;
  addInput.value = "";

  const claimedInput = document.getElementById("claimedStatus");
  const claimed = claimedInput.checked;
  claimedInput.checked = false;

  model.addReservation(fname, claimed);
};

// listened to in view fn - fname provided by Object.entries
export const claimReservation = () => {
  const addInput = document.getElementById("add-name");
  const fname = addInput.value;
  model.claimReservation(fname);
};
