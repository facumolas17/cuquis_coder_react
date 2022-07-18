import React from 'react';

const CartWidget = () => {
  return (
    <>
        <button type="button" className="btn">
            <i className="bi bi-cart"></i>
            <span className="badge text-bg-secondary">4</span>
        </button>
    </>
  )
}

export default CartWidget;