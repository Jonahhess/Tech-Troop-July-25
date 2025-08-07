export default function Item({ item, shouldDiscount }) {
  return (
    <li key={item.item} id={item.item} className="item">
      {item.item}
      {item.price
        ? ` :$${shouldDiscount ? item.price * (1 - item.discount) : item.price}`
        : ""}
    </li>
  );
}
