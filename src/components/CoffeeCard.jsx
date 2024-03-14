import StarFill from "./icons/StarFill";
import Star from "./icons/Star";

const CoffeeCard = ({ product }) => {
  return (
    <div className="cursor-pointer md:max-w-[230px]">
      <div className="relative h-[50%] w-full flex flex-col">
        <img className="relative rounded-[15px] w-[100%] h-[100%] object-cover" src={product?.image} />
        {
          product.popular &&
          <span className="absolute bg-[#F6C768] h-[15%] mt-3 ml-3 w-[30%] text-black01 text-[0.85rem] rounded-lg" >Popular</span>
        }
      </div>
      <div className="text-button01 max-h-[50%]flex flex-col justify-start pt-2">
        <div className="flex justify-between font-medium text-[0.95rem]">
          <h3>{product?.name}</h3>
          <span className="bg-[#BEE3CC] text-black01 p-1.2 w-[20%] rounded-md">{product?.price}</span>
        </div>
        <p className="text-[0.655rem] flex items-center font-bold">
          {product.rating ? (
            <>
              <StarFill />
              <h4>{parseFloat(product.rating).toFixed(1)}<span className="text-text01">({product.votes}votes)</span></h4>
            </>
          ) : (
            <>
              <Star />
              <h4 className="text-text01">No Rating</h4>
            </>
          )}
          {
            !product.available && <span className="relative left-[40%] text-orange01 font-bold">Sold out</span>
          }
        </p>
      </div>
    </div>
  );
};

export default CoffeeCard;
