import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "../Axios";

const Edit = () => {
  let navigate=useNavigate()
    let { id } =useParams()
  let [state, setState] = useState({
    name: "",
    age: "",
  });
    let { name, age } = state;
    
  let change = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
    };

    useEffect( async () => {
        let data =  await Axios.get(`/students/${id}`)
        setState(data.data)
        
    },[])
    


  let submit = async e => {
    e.preventDefault();
    let payload = { name, age };
    await Axios.put(`/students/${id}`, payload);
    navigate("/")
  };

  return (
    <div>
      <section className="w-full  mt-[100px]   ">
        <h1 className="text-center text-2xl font-semibold mt-6 text-red-500 ">EDIT</h1>
        <article className="w-[60%] mx-auto flex justify-center bg-slate-400  py-24 rounded-sm mt-2 shadow-2xl">
          <div>
            <form onSubmit={submit}>
              <label htmlFor="" className="px-2 font-bold">
                name
              </label>
              <input
                type="
          "
                name="name"
                value={name}
                onChange={change}
                className="border-2 border-gray-500 px-2"
              />
              <label htmlFor="" className="px-2 font-bold">
                age
              </label>
              <input
                type="text"
                name="age"
                value={age}
                onChange={change}
                className="border-2 border-gray-500 px-2"
              />
              <button onSubmit={submit} className=" mx-2 px-2 bg-white">
                submit
              </button>
            </form>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Edit;
