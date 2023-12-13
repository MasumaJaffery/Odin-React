import { useState } from "react";
import { CiCirclePlus,CiCircleMinus } from "react-icons/ci";
const counter = () => {
const [count, setCount] = useState(0);
return (
    <>
    <div className="flex justify-center items-center">
  <button 
    onClick={() => setCount(count + 1)} 
    className="bg-green-500 hover:bg-green-600 text-3xl text-white font-bold py-1 px-1 rounded-full mr-4">
    <CiCirclePlus />
  </button>
  <h1 className="text-3xl font-bold">{count}</h1>
  <button 
    onClick={() => ( count === 0)?  setCount(0) : setCount(count - 1)
    }
    className="bg-red-500 hover:bg-red-600 text-3xl text-white font-bold py-1 px-1 rounded-full ml-4">
    <CiCircleMinus />
  </button>
</div>

    </>
);
}
export default counter;