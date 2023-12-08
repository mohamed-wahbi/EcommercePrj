import React from "react";
import { CardGroup, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Article = ({ showCard }) => {
  return (
    <>
      {showCard.map((item) => {
        return (
          <div>
            <div
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
            </div>
          </div>
        );
      })}

      <div>
        <Link
          to="/"
          className="btn btn-outline-dark d-flex justify-content-center my-5"
        >
          <h3 className="btnHome">go-home</h3>
        </Link>
      </div>
    </>
  );
};

export default Article;
