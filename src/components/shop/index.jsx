import { Button } from "antd";
import React, { useContext } from "react";
import Card from "./card";
import { ShopAppContext } from "../../context/shop-context";
import { useNavigate } from "react-router-dom";


const ShopComponent = () => {
  const { state } = useContext(ShopAppContext);
  const navigate = useNavigate()
  return (
    <div>
      {state.data.length ? (
        <div className="p-6 flex flex-col gap-4">
        {state.data.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
        
      ) :(
        <div className="text-center mt-4">
          <img
            className="mx-auto w-[320px]"
            src="https://uzum.uz/static/img/shopocat.490a4a1.png"
            alt="logo"
          />
          <div className="text-center">
            <p className="font-semibold mb-1">
              Your wishlist is empty right now
            </p>
            <p>You can find needed products on main page</p>
            <Button className="mt-5" onClick={() => navigate("/")}>
              Main page
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopComponent;
