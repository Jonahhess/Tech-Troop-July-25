import Item from "./Item.jsx";

export default function Home({ store, shouldDiscount }) {
  return store.map((item) => (
    <Item item={item} shouldDiscount={shouldDiscount}></Item>
  ));
}
