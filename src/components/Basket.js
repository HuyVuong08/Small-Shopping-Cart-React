import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((total, curItem) => total + curItem.price*curItem.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 3000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        { cartItems.length === 0 && <div>Cart is empty</div> }
        { cartItems.map(item => (
          <div key={ item.id } className="row">
            <div className="col-2">{ item.name }</div>
            <div className="col-1">
              <button
                onClick={() => onAdd(item)}
                className="add"
              >
                +
              </button>
              <button
                onClick={() => onRemove(item)}
                className="remove"
              >
                -
              </button>
            </div>
            <div className="col-2 text-right">
              { item.qty } x ${ item.price.toFixed(2) }
            </div>
          </div>
        ))}
        { cartItems.length !== 0 && (
          <div>
            <hr />
            <div className="row">
              <div className="col-2">Items Price:</div>
              <div className="col-2 text-right">${ itemsPrice.toFixed(2) }</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price:</div>
              <div className="col-2 text-right">${ taxPrice.toFixed(2) }</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price:</div>
              <div className="col-2 text-right">${ shippingPrice }</div>
            </div>
            <div className="row">
              <div className="col-2"><strong>Total Price:</strong></div>
              <div className="col-1 text-right"><strong>${ totalPrice.toFixed(2) }</strong></div>
            </div>
            <hr />
            <div className='row'>
            <button onClick={() => alert('Implement Checkout!')}>Checkout</button>
            </div>
          </div>
        )}
      </div>
    </aside>
  )
}
