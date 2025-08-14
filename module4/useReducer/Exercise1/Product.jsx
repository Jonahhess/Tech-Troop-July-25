export default function Product({ p, addItem }) {
  return (
    <>
      <p>
        {p.name}: ${p.price}
      </p>
      <button onClick={() => addItem(p)}>Add Item to Cart</button>
    </>
  );
}
