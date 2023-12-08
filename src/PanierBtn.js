import React from "react";

const PanierBtn = ({nbrArt,cost}) => {
  return (
    <div>
      <div className="panier">
        <h2 style={{ textAlign: "center", margin: "5px" }}>
          panier : <p>{nbrArt}</p>
          <p>totale : {cost} $</p>
        </h2>
      </div>
    </div>
  );
};

export default PanierBtn;