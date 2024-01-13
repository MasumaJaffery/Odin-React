import React, {useState, useEffect} from "react";
const FetchApi = () => {
    // useState to store the data from the API;
    const [data, setData] = useState([]);
    // useEffect to fetch the data from the API;
    useEffect(() => {
         getData();
    });
    // Fetching the data from the API by Async/Await;
    const getData = async() => {
      try { 
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const result = await response.json();
      setData(result);
      console.log(result); 
      }
      catch(error) {
        console.error("Error fetching data:", error);
      }
    };
    return (
        // Displaying the data from the API by Map Function;
        <>
        {
         data.map((currentElement) => (
            <div className="card" key={currentElement.id} >
            <h4>{currentElement.title}</h4>
            <h3>{currentElement.body}</h3>
            </div>
         ))
        };
        </>
    );
}
export default FetchApi;