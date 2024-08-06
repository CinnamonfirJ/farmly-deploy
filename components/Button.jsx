import React from "react";

const Button = (props) => {
  return (
    <button className=' border border-black py-2 px-3 rounded-md font-bold text-sm bg-accent text-text'>
      <span>{props.children}</span>
    </button>
  );
};

export default Button;
