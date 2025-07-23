import * as update from "./update.js";
// called by the model
export const renderModel = (model) => {
  const reservations = document.getElementById("reservations");
  reservations.innerHTML = "";
  Object.entries(model).forEach(([key, value]) => {
    console.log(key, value);
    const li = document.createElement("li");
    li.innerHTML = `${key} has a${
      value.claimed ? " claimed" : "n unclaimed"
    } reservation`;
    li.style.textDecoration = value.claimed ? "line-through" : "none";

    li.addEventListener("click", () => {
      update.claimReservation(key);
      li.style.textDecoration = "line-through";
    });
    reservations.appendChild(li);
  });
};
document.addEventListener("DOMContentLoaded", () => {
  update.initialize(); // roundabout way of saying model init

  // sends update message - calls update, which updates the model, which updates the view.
  document.getElementById("addBtn").addEventListener("click", () => {
    update.addReservation();
  });
  // sends update message - calls update, which updates the model, which updates the view.
  document.getElementById("claimBtn").addEventListener("click", () => {
    update.claimReservation();
  });
});
