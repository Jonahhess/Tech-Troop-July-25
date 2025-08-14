export default function Item({ item, removeItem }) {
  return (
    <>
      <p>
        {item.name}: ${item.price}
      </p>
      <button onClick={() => removeItem(item.id)}>Remove Item from Cart</button>
    </>
  );
}
