import { Skeleton } from "antd";

const LoaderApi = () => {
  const card_product_loader = () => {
    return Array.from({ length: 4 }).map((_, idx) => (
      <div key={idx}>
        <Skeleton.Image className="!w-full !h-[250px]" active={true}/>
        <br />
        <Skeleton.Input active={true} className="!h-[20px] !w-full"/>
        <br />
        <Skeleton.Input active={true} className="!h-[20px] !w-[80%]"/>
      </div>
    ));
  };

  return {card_product_loader}
};

export default LoaderApi;
