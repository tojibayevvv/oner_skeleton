import React from "react";
import useAxios from "../../hooks/useAxios";
import LoaderApi from "../../generic/loader";
import MostSoldCard from "../mostsoldCard";

const MostSold = () => {
  const { data, loading } = useAxios({ url: "auto_oils" });
  const { card_product_loader } = LoaderApi();
  return (
    <section className="">
      <h2 className="text-[20px] font-medium text-[#1b1d1f] py-5">
      Часто продаваемые
      </h2>
      <div className="grid grid-cols-4 gap-5">
        {loading
          ? card_product_loader()
          : data.map((value) => <MostSoldCard key={value.id} {...value} />)}
      </div>
    </section>
  );
};

export default MostSold;
