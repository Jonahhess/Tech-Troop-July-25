import { useState } from "react";
import Landing from "./Landing";
import Home from "./Home";

export default function App() {
  const data = {
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      {
        item: "Surround Sound Pelican",
        price: 3099,
        discount: 0.05,
        hottest: true,
      },
    ],
    shouldDiscount: false,
    currentPage: "Landing",
  };

  const [state, setState] = useState(data);

  return (
    <div id="store-container">
      <Landing
        name={state.user}
        hottestItem={state.store.find((item) => item.hottest)}
      ></Landing>
      <br></br>
      <Home store={state.store}></Home>
    </div>
  );
}
