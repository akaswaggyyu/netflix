import React from "react";
import "./PlansComponent.css";

function PlansComponent({ type, res, isCurrent = false, loadCheckout }) {
  return (
    <div className="plans">
      <div className="plans__container">
        <div className="plans__info">
          <h1>Netflix {type}</h1>
          <h2>{res}</h2>
        </div>
        {!isCurrent ? (
          <button className="plans__button" onClick={loadCheckout}>
            Subscribe
          </button>
        ) : (
          <button className="plans__current">Current Package</button>
        )}
      </div>
    </div>
  );
}

export default PlansComponent;
