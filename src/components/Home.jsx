import bg from "../assets/bg-cafe.jpg";
import CoffeeLists from "./CoffeeLists";

const Home = () => {
  return (
    <>    
      <div className="relative w-full h-[200px]">
        <img
          src={bg}
          alt="coffee-bg"
          className="min-w-full h-[100%]  object-cover z-0"
        />
      </div>
      <CoffeeLists />
    </>
  );
};

export default Home;
