import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/Context"
import { nanoid } from "nanoid";

const AddForm = () => {
  const [item, setItem] = useState({
    name: "",
    brewery_type: "",
    state_province: "",
    address_1: "",
    phone: "",
  });
  
  const { addItem } = useGlobalContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const itemId = nanoid();
    item.id = itemId;
    addItem(item);

    navigate("/");
    
  }
  
  return (
    <div>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <label className="input input-bordered flex items-center gap-2 xl:w-1/3 lg:w-1/2 md:w-96 w-full input-primary">
          Name
          <input 
            className="grow" 
            type="text" 
            name="name"
            id="name"
            value={item.name}
            onChange={handleChange}
            placeholder="Brewery name" 
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 xl:w-1/3 lg:w-1/2 md:w-96 w-full mt-5 input-primary">
          Type
          <input 
            className="grow" 
            type="text" 
            name="brewery_type"
            id="brewery_type"
            value={item.brewery_type}
            onChange={handleChange}
            placeholder="Brewery type" 
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 xl:w-1/3 lg:w-1/2 md:w-96 w-full mt-5 input-primary">
          State
          <input 
             className="grow" 
            type="text"
            name="state_province"
            id="state_province"
            value={item.state_province}
            onChange={handleChange}
            placeholder="Brewery state" 
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 xl:w-1/3 lg:w-1/2 md:w-96 w-full mt-5 input-primary">
          Address
          <input 
            className="grow" 
            type="text" 
            name="address_1"
            id="address_1"
            value={item.address_1}
            onChange={handleChange}
            placeholder="Brewery address" 
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 xl:w-1/3 lg:w-1/2 md:w-96 w-full mt-5 input-primary">
          Phone
          <input 
            className="grow" 
            type="text"
            name="phone"
            id="phone" 
            value={item.phone}
            onChange={handleChange}
            placeholder="Brewery phone"
            required 
          />
        </label>
        <div className="w-96 text-center mt-10">
        <button className="btn btn-accent w-60">Add</button>
        </div>
      </form>
    </div>
  )
}
export default AddForm



