import Item from "./Item.jsx";

export default function Home({ store }) {
  return store.map((item) => <Item item={item}></Item>);
}
