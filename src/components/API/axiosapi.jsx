import React, {useState, useEffect} from "react";
import axios from "axios";
const axiosApi = () => {
  // useState()
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  // useEffect()
  useEffect(() => {
    getData();
  });
  // getData() async function by using axios
  const getData = async() => {
   try {
   const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setData(response.data);
    console.log(response);
   }
   catch (error) {
    setError("Error getting data");
   }
  };
  return (
    <>
      {
         data.slice(0,3).map((currentElement) => (
            <div className="card" key={currentElement.id} >
            <h4>{currentElement.title}</h4>
            <h3>{currentElement.body}</h3>
            </div>
         ))
        };
        {error && <p>{error}</p>}
    </>
  );
}
export default axiosApi;