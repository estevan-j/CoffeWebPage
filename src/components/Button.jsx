
const Button = ({ text, active, handleClick }) => {

  return (
    <button
      onClick={handleClick}
      className={`cursor-pointer p-3 m-2 rounded-lg ${
        active && "bg-text01" 
      }`}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
