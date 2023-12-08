import React from "react";
import { Link } from "react-router-dom";

const Acheter = ({ newData }) => {
  return (
    <div>
      <h3 style={{ padding: "5px" }}>Vos Achats :</h3>

      {newData.map((item) => {
        return (
          <div
            style={{
              width: "70%",
              margin: "auto",
              background: "#725151",
              color: "white",
              height: "30px",
              marginBottom: " 9px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <p>article :{item.title} </p>
              <p>prix :{item.prix} $</p>
              <p>
                livred at : {item.jour + "/" + item.mois + "/" + item.annee}{" "}
              </p>
            </div>
          </div>
        );
      })}

      <div className="finAchat">
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

export default Acheter;
