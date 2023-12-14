import { useState } from "react";
const form = () => {
    const [formData, setformData] = useState({
         name: "",
         email: ""
});
    const handleInput = (e) => {
      const {name,value} = e.target;
      setformData({...formData, [name]: value});
    }
  const handleSubmit = (e) => {
      e.preventDefault();
  }
 return (
    <div className="flex flex-col justify-center items-center">
    <form onSubmit={handleSubmit} className="max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInput}
        className="mb-4 px-3 py-2 rounded-md border focus:outline-none focus:border-blue-500"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInput}
        className="mb-4 px-3 py-2 rounded-md border focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  </div>  
 );
};
export default form;