import React, { useRef } from "react";
import useRipple from "./useRipple";

const Button = () => {
  //create a ref to reference the button
  const ref = useRef<HTMLButtonElement>(null);
  //pass the ref to the useRipple hook
  const ripples = useRipple(ref);
  return (
    <button ref={ref}>
      {ripples}
      Search
    </button>
  );
};

export default Button;
