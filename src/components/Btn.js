import React from "react";
import { Row, Col } from "react-bootstrap";

const Btn = ({ filtering, allCat }) => {
  const onFilter = (cat) => {
    filtering(cat);
  };

  return (
    <Row className="my-2 mb-5">
      <Col className="d-flex justify-content-center">
        {allCat.length >= 1 ? (
          allCat.map((cat, index) => (
            <div key={index}>
              <button
                className="btn btn-outline-info mx-2"
                onClick={() => onFilter(cat)}
              >
                {cat}
              </button>
            </div>
          ))
        ) : (
          <h4>pas d'article !</h4>
        )}
      </Col>
    </Row>
  );
};

export default Btn;
