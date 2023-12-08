import React from "react";
import { CardGroup, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cards = ({ myItem, ajoutArt, tot, infoCard }) => {
  return (
    <div>
      {myItem.length === 0 ? (
        <h4>pas d'article ...</h4>
      ) : (
        myItem.map((item) => {
          return (
            <CardGroup className="d-block my-5" key={item.id}>
              <Card className="my-5">
                <div className="d-flex">
                  <Card.Body className="">
                    <div className="d-flex justify-content-between">
                      <Card.Title>{item.title}</Card.Title>
                      <p>PRIX : {item.prix} $</p>
                    </div>
                    <Card.Text>{item.discription}</Card.Text>
                  </Card.Body>
                  <Card.Img
                    className="img mx-4"
                    variant="top"
                    src={item.img}
                    alt="icon vtt"
                  />
                </div>
                <button
                  className="btn  btn-info"
                  onClick={() => {
                    ajoutArt(item.id);
                    tot(item.prix);
                  }}
                >
                  ajouter
                </button>

                <Link to="/article">
                  <button
                    className="btn btn-success"
                    style={{ width: "100%" }}
                    onClick={() => infoCard(item.id)}
                  >
                    info +
                  </button>
                </Link>
              </Card>
            </CardGroup>
          );
        })
      )}
    </div>
  );
};

export default Cards;
