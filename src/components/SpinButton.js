import React, { useState } from "react";
import { motion } from "framer-motion";

const SpinButton = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const clickHandler = () => {
    if (!isClicked) {
      props.onClick();
      setIsClicked(true);
    }
  };
  return (
    <motion.div
      className={`cursor-pointer py-2  mt-3 mb-2 flex border-4 border-black rounded-lg justify-center ${
        props.isLeft && props.didLeftSpin
          ? "bg-slate-600 hover:bg-slate-600"
          : "bg-red-600 hover:bg-red-700"
      } ${
        !props.isLeft && props.didRightSpin
          ? "bg-slate-600 hover:bg-slate-600"
          : "bg-red-600 hover:bg-red-700"
      }`}
      onClick={clickHandler}
      animate={{ y: isClicked ? 25 : 0 }}
      transition={{ duration: 0.2 }}
      whileHover={{ scale: isClicked ? 1 : 1.1 }}
    >
      <div className="text-white ">SPIN</div>
    </motion.div>
  );
};

export default SpinButton;
