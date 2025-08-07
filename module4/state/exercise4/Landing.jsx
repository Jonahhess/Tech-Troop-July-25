import React from "react";

export default function Landing({ name, hottestItem }) {
  return (
    <div id="user">
      <p id="user">Welcome, {name}!</p>
      <p id="hottest-item">
        The hottest item is: {hottestItem.item} for {hottestItem.price}
      </p>
    </div>
  );
}
