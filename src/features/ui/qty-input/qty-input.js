import { useState } from 'react'
import './qty-input.scss'

export default function QtyInput(props) {
  const [qty, setQty] = useState(1);

  async function handleMinus() {
    setQty((qty) => {
      const newQty = qty > 1 ? qty - 1 : 1;
      props.onQtyChange(newQty);
      return newQty;
    });
  }

  async function handlePlus() {
    setQty((qty) => {
      const newQty = qty < 10 ? qty + 1 : 10;
      props.onQtyChange(newQty);
      return newQty;
    });
  }

  return (
    <div className="qty-input">
      <button className="qty-count qty-count--minus" onClick={handleMinus} type="button">-</button>
      <p className="product-qty" type="number" name="product-qty" value={qty} min='1' max='10'>{qty}</p>
      <button className="qty-count qty-count--add" onClick={handlePlus} type="button">+</button>
    </div>
  )
}
