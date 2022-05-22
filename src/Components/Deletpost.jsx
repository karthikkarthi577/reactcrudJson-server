import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "../Axios";


const Delete = () => {
  let navigate=useNavigate()
  let { id } = useParams();
  let [state, setState] = useState({
    name: "",
    age: "",
  });
  let { name, age } = state;

  useEffect(async () => {
    let data = await Axios.get(`/students/${id}`);
    setState(data.data);
  }, []);

  let submit = async e => {
    e.preventDefault();
   
    await Axios.delete(`/students/${id}`,);
    navigate("/")

  };

  return (
    <div>
      <section className="w-[100%]">
        <article className="w-[20%] mx-auto flex justify-between mt-[150px]   border-gray-500 border-2 py-2 px-2 rounded-md">
          <h6> name-{state.name}</h6>
          <h6>age-{state.age}</h6>
          <button
            onClick={submit}
            className="bg-red-500 p-1 text-white rounded-sm"
          >
            Delete
          </button>
        </article>
      </section>
    </div>
  );
};

export default Delete;
