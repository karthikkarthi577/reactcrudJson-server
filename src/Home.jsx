import React, { useState, useEffect, Fragment } from "react";
import Axios from "../src/Axios";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const Home = () => {
  let [state, setState] = useState([]);

  useEffect(async () => {
    let fetchedData = await Axios.get("/students");
    setState(fetchedData.data);
    console.log(fetchedData.data);
  }, []);

  return (
    <Fragment>
      <section className="w-[100%] ">
        <article className="w-[80%] mx-auto flex justify-center">
          
          <table className="  border-gray-400 border-2 mt-[150px] shadow-2xl  ">
            <thead>
              <tr className="border-b-2  border-gray-400  ">
                <th className="border-r-2 border-gray-400  px-9  ">id</th>
                <th className="border-r-2 border-gray-400  px-9  ">name</th>
                <th className="border-r-2 border-gray-400  px-9 ">age</th>
                <th className="border-r-2 border-gray-400  px-9 ">E/D</th>
              </tr>
            </thead>
            <tbody>
              {state.map(x => {
                return (
                  <tr key={x.id}>
                    <td className="border-r-2 border-gray-400  border-b-2  px-9  ">
                      {x.id}
                    </td>
                    <td className="border-r-2 border-gray-400  border-b-2   px-9 ">
                      {x.name}
                    </td>
                    <td className="border-r-2 border-gray-400  border-b-2  px-9 ">
                      {x.age}
                    </td>
                    <td className=" flex border-b-2 border-gray-400 py-2  ">
                      <span className="px-5   border-r-2 border-gray-400 h-[20px]">
                        <Link to={`/delete/${x.id}`}>
                          <AiOutlineDelete />
                        </Link>
                      </span>
                      <span className="px-3">
                        <Link to={`/edit/${x.id}`}>
                          <AiFillEdit />
                        </Link>
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </article>
      </section>
    </Fragment>
  );
};

export default Home;
