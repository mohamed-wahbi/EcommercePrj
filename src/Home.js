import React from "react";
import { Link } from "react-router-dom";
import PanierBtn from "./PanierBtn";

const Home = ({ myItem, ajoutArt, nbrArt,cost,tot }) => {
  return (
    <div>
      <Link to="/achats">
        <PanierBtn nbrArt={nbrArt} cost={cost} />
      </Link>

      {myItem.map((item) => {
        return (
          <div key={item.id} className="card">
            <h1>{item.title}</h1>
            <p>{item.discription}</p>
            <img src={item.img} alt="logo" />
            <br/>
            <b>{item.prix} $</b>
            <br />
            <br />
            <button onClick={() => {ajoutArt(item.id) ; tot(item.prix)}}>ajouter au panier</button>
            
          </div>
        );
      })}

    
    </div>
  );
};

export default Home;
