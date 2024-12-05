import React, { useContext } from "react";
import Logo from "../../assets/Oner_logo.svg";
import Lupa from "../../assets/lupa.svg";
import location from "../../assets/location.svg";
import phone from "../../assets/phonelogo.svg";
import personIcon from "../../assets/personIcon.svg";
import neindots from "../../assets/neindots.svg";
import ad from "../../assets/advertisement.png";
import { ShoppingFilled } from "@ant-design/icons";
import { Badge } from "antd";
import { ShopAppContext } from "../../context/shop-context";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { state } = useContext(ShopAppContext);
  const navigate = useNavigate()
  return (
    <>
      <div className="flex justify-between items-center gap-5 py-[10px]">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="w-[45%] py-3 px-2 bg-[#e5e5e5] flex justify-between items-center rounded-lg">
          <input
            placeholder="Введите номер запчасти или VIN"
            className="outline-none bg-transparent w-full"
            type="text"
          />
          <img src={Lupa} alt="" />
        </div>
        <div>
          <ul className="flex justify-between gap-5">
            <li className="flex items-center gap-1 text-[12px]">
              <img src={location} alt="" />
              Санкт-Петербург
            </li>
            <li className="flex items-center gap-1 text-[12px]">
              <img src={phone} alt="" />
              +7 (347) 229-46-45
            </li>
            <li className="flex items-center gap-1 text-[12px]">
              <img src={personIcon} alt="" />
              Вход / Регистрация
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-2 divide-solid bg-gray-700 w-full" />
      <div className="">
        <ul className="flex justify-between items-center gap-2 py-4">
          <li className="flex items-center gap-2 text-[16px] rounded-2xl py-3 bg-purple-950 text-white px-4">
            <img src={neindots} alt="" />
            Все категории
          </li>
          <li>Запчасти для ТО</li>
          <li>Автомасла</li>
          <li>Оригинальные запчасти</li>
          <li>Неоригинальные запчасти</li>
          <li>Лампочки</li>
          <li>Аккумуляторы</li>
          <div onClick={()=> navigate("/shop")}>
            <Badge count={state.data.length}>
              <ShoppingFilled className="text-[25px]" />
            </Badge>
          </div>
        </ul>
      </div>
      <div className="mt-3">
        <img src={ad} alt="" />
      </div>
    </>
  );
};

export default Header;
