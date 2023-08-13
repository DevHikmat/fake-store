import React from "react";
import { Link } from "react-router-dom";

const OneProduct = ({ prod }) => {
  const { id, title, price, category, description, image } = prod;

  return (
    <div className="one-product col mb-4">
      <Link to={`product/${id}`}>
        <div className="card h-100">
          <img
            style={{ width: "100%", height: "260px", objectFit: "contain" }}
            src={image}
            alt={title}
            className="card-img-top"
          />
          <div className="card-body">
            <h6>{title}</h6>
            <p
              style={{
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              className="text-muted"
            >
              {description}
            </p>
          </div>
          <div className="card-footer d-flex justify-content-between align-items-center">
            <span className="badge bg-light text-secondary">{category}</span>
            <span className="text-primary">{price} $</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default OneProduct;
