import React, { useContext } from "react";
// import { countContext } from "../App";
import Context1 from "../Contexts/Context1";

const LastNav = () => {

    const  [count, setCount] = useContext(Context1)

  return (
    <div className="flex justify-center m-5 p-5">
      {/* <button onClick={()=> setCount(count + 1)} className="p-5 bg-green-600 text-yellow-200 rounded-3xl">
        Count 4 = {count}
      </button> */}
      <button>count {count}</button>
    </div>
  );
};

export default LastNav;
