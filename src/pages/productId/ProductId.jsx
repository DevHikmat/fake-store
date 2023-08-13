import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductService } from "../../services/ProductService";

const ProductId = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const handleOneProduct = async () => {
    const data = await ProductService.getOneProduct(id);
    setProduct(data);
  };

  useEffect(() => {
    handleOneProduct();
  }, [id]);
  return (
    <div className="one-product">
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
        {product ? (
          <>
            <div className="col col-sm-12 col-md-4 col-lg-3">
              <img src={product.image} alt="rasm" className="img-fluid" />
            </div>
            <div className="col col-sm-12 col-md-8 col-lg-9">
              <h4>{product.title}</h4>
              <span className="text-primary">{product.category}</span>
              <p className="text-muted">{product.description}</p>
              <span className="text-warning">{product.price} $</span>
              <div className="btn-group d-block mt-3">
                <button className="btn btn-light">-</button>
                <button className="btn btn-light disabled">1</button>
                <button className="btn btn-light">+</button>
              </div>
              <h6>Total Price: {product.price} $</h6>
            </div>
          </>
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
};

export default ProductId;
