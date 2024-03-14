import { useState } from "react";
import Line from "./icons/Line";
import { useEffect } from "react";
import Button from "./Button";
import { fetchData } from "../utils/fetchData";
import CoffeeCard from "./CoffeeCard";

const CoffeeLists = () => {
  const [products, setProducts] = useState([]);
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    if (available){
      setProducts(products.filter((caffee) => caffee.available === true));
      return;
    }
    fetchData().then((response) => {
      setProducts(response);
    });
  }, [available]);

  const handleClick = (e) => {
    e.preventDefault();
    setAvailable(!available);
  };

  return (
    <div className="absolute z-1 bg-container max-w-[65vw]  min-h-[50%] overflow-hidden  mt-10 mb-3 rounded-lg">
      <div className="relative flex flex-col items-center justify-center p-9">
        <div className="relative text-text01  text-center max-h-[25%] w-[25rem]">
          <div className="absolute left-[50%] top-[-25%]">
            <Line />
          </div>
          <h1 className="text-[1.7rem] text-[#fff]">Our Collection</h1>
          <p className="text-[1rem] pt-5px">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
        </div>
        <div className="max-h-[20%] flex items-center justify-between text-button01 text-[0.875rem]">
          <Button
            text="All Products"
            active={!available}
            handleClick={handleClick}
          />
          <br />
          <Button
            text="Available Now"
            active={available}
            handleClick={handleClick}
          />
        </div>
        <div className="flex justify-around items-center gap-2 p-5 flex-wrap">
          {products.map((product) => (
            <CoffeeCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoffeeLists;
