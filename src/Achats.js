import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";


const Achats = ({
  newData,
  achatTab,
  achatTable,
  panierP,
  panierPlus,
  panierMoin,
  nbrArt,
}) => {
  const [achatConfirm, setAchatConfirm] = useState(false);

  const confirmAchat = () => {
    const confirmation = window.confirm(
      "Êtes-vous sûr d'acheter cet article ?"
    );
    if (confirmation) {
      setAchatConfirm(true);
    }
  };

  if (achatConfirm) {
    return <Navigate to="/acheter" />;
  }
  const listAchat = (id) => {
    achatTab(id);
    console.log(achatTable);
    confirmAchat();
  };
  return (
    <div>
      {newData.length === 0 ? (
        <h1>votre panier est vide !</h1>
      ) : (
        newData.map((item) => {
          return (
            <div
              key={item.id}
              className="card"
              style={{
                background: "#373f439e",
                padding: "15px",
                color: "white",
              }}
            >
              <h1>{item.title}</h1>
              <p>{item.discription}</p>
              <img src={item.img} alt="logo" />
              <p>{item.prix} $</p>
              <hr />

              <div className="d-flex aline-item-center">
                <button
                  onClick={() => {
                    panierPlus(item.prix, item.id);
                  }}
                  style={{ width: "40px", textAlign: "center" }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    panierMoin(item.prix, item.id);
                  }}
                  style={{ width: "40px", textAlign: "center" }}
                >
                  -
                </button>
                <p>{nbrArt.length}</p>
              </div>
            </div>
          );
        })
      )}

      {newData.length != 0 && (
        <button
          className="btn btn-success"
          id="ichri"
          onClick={() => listAchat(newData[0].id)}
        >
          ACHETER
        </button>
      )}

      <div>
        <Link
          to="/"
          className="btn btn-outline-dark d-flex justify-content-center"
        >
          <h3 className="btnHome">go-home</h3>
        </Link>
      </div>
    </div>
  );
};

export default Achats;
