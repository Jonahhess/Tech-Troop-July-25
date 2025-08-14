import { useReducer } from "react";
import reducer from "./reducer";
import Product from "./Product";
import Item from "./Item";

export default function ShoppingCartReducer() {
  const initialCart = {
    items: [],
    total: 0,
    itemCount: 0,
  };

  const [cart, dispatch] = useReducer(reducer, initialCart);

  const addItem = (product) => {
    dispatch({ type: "ADD_ITEM", product });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const products = [
    { id: 1, name: "laptop", price: 100 },
    { id: 2, name: "phone", price: 200 },
  ];

  return (
    <div>
      <h2>
        Shopping Cart ({cart.itemCount} items) - Total: ${cart.total}
      </h2>
      <button
        onClick={clearCart}
        style={{ visibility: cart.items.length === 0 ? "hidden" : "visible" }}
      >
        Clear Cart
      </button>
      {products.map((p) => (
        <Product key={p.id} p={p} addItem={addItem}></Product>
      ))}
      <div id="my-cart">
        <div>My Cart</div>
        {cart.items.map((i) => (
          <Item key={i.id} item={i} removeItem={removeItem}></Item>
        ))}
      </div>
    </div>
  );
}
