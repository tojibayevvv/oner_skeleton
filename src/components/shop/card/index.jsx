import { Button } from "antd";
import React, { useContext } from "react";
import { ShopAppContext } from "../../../context/shop-context";

const Card = ({ product }) => {
  const {dispatch} = useContext(ShopAppContext)
  return (
    <ul>
      <li
        className="list-none bg-[#ffffff68] p-3 flex justify-between items-center"
        key={product.id}
      >
        <img src={product.imagie} alt={product.name} />
        <p>{product.name}</p>
        <p>
          {product.price_current}
          {product.currency}
        </p>
        <div className="flex gap-3">
          <Button
            type="primary"
            danger
            onClick={() => dispatch({ type: "delete", delete_id: product.id })}
          >
            delete
          </Button>
          <Button type="primary">Buy</Button>
        </div>
      </li>
    </ul>
  );
};

export default Card;
