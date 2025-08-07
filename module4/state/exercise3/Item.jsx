export default function Item({ item }) {
  return (
    <li key={item.item} id={item.item} className="item">
      {item.item}
      {item.price ? ` :$${item.price}` : ""}
    </li>
  );
}
