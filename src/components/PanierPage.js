import React from "react";

const PanierPage = ({ myItem,filterPanierCard }) => {
    
  return (
    <div>
      {myItem.map((item) => {
        return (
          <div className="panierCard" key={item.id}>
            <img
              src={item.img}
              alt="img..."
            />
            <div style={{marginLeft:"15px"}}>
              <h3>{item.title}</h3>
              <p>Description : {item.discription}</p>
              <p>Prix : {item.prix}</p>
              <div className="btnPanier">
                <button>au panier</button>
                <button>acheter</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PanierPage;
