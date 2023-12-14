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
    <form onSubmit={handleSubmit}>
     <input type = "text" name="name" placeholder="Name" value={formData.name} onChange={handleInput} />
     <input type = "email" name="email" placeholder="Email" value={formData.email} onChange={handleInput} />
     <button type = "submit">Submit</button>
    </form>
   </div>
 );
};
export default form;