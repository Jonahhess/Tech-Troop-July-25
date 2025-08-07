import Item from "./Item.jsx";

export default function Home({ store }) {
  console.log(store);
  return store.map((item) => <Item item={item}></Item>);
}
