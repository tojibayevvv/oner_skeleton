import React, { useState } from "react";
import { Rate, Button } from "antd";
import {
  ShoppingCartOutlined,
  LikeTwoTone,
  DislikeTwoTone,
} from "@ant-design/icons";
const MostSoldCard = (props) => {
  const {
    action,
    article,
    currency,
    id,
    image,
    name,
    price_current,
    price_old,
    rating,
    reviews,
  } = props;

  const [active, setActive] = useState(null); // "like", "dislike", or null

  const handleClick = (type) => {
    setActive((prev) => (prev === type ? null : type)); // Toggle active state
  };

  return (
    <>
        <div className="border rounded-[10px] border-[#dedee2] p-5">
      <div>
        <img className="max-w-full rounded-[10px]" src={image} alt="" />
        <div className="flex justify-between items-center">
          <div className="text-[14px] text-[#7a7680]">
            Артикул: <span className="text-[#c3c2c4]">{article}</span>
          </div>
          <div className="flex items-center gap-1">
            <Rate
              className="text-[14px] text-[#ff9431]"
              count={5}
              value={rating}
            />
            <p className="text-[14px]">
              {rating}.0 ({reviews})
            </p>
          </div>
        </div>
        <div className="text-[16px] text-[#1b1d1f] font-medium">{name}</div>
        <div className="flex items-center justify-between">
          <div className="text-[25px] mt-4">
            {price_current}
            {currency}
            <sup className="line-through text-[15px] text-[#898585]">
              {price_old}
              {currency}
            </sup>
          </div>
          <button className="border-2 border-[#6b59cc] transition-all rounded-lg w-10 h-10 flex items-center justify-center">
            <ShoppingCartOutlined className="text-[20px] text-[#6b59cc] hover:bg-[#6b59cc] group-hover:text-white flex items-center" />
          </button>
        </div>

        <div className="flex justify-between mt-6">
          <Button
            type={active === "like" ? "primary" : "default"}
            icon={<LikeTwoTone />}
            onClick={() => handleClick("like")}
          >
            Like
          </Button>
          <Button
            type={active === "dislike" ? "primary" : "default"}
            icon={<DislikeTwoTone />}
            onClick={() => handleClick("dislike")}
          >
            Dislike
          </Button>
        </div>
      </div>
    </div>
    </>
  );
};

export default MostSoldCard;
