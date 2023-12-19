import { useState } from "react";
const Cart = () => {
 const[Items, AddItems] = useState(0);
 const add = () => {
    AddItems(Items + 1);
 };
 return (
  <>
  <button onClick={add}class="bg-green-500 hover:bg-blue-200 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-700 rounded">Add to Cart</button>
  <h1>{Items} Items {Items? 'Added' : 'Empty'}</h1>
  </>
 );
};
export default Cart;