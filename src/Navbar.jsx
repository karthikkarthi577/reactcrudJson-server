import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <section className="bg-gray-300 h-[55px] w-[100%] shadow-xl ">
        <article className="w-[85%] mx-auto flex justify-between h-[55px] items-center">
          <div className="leftBlock basis-[50%] font-semibold hover:text-red-500 text-xl  ">
            CRUD
          </div>
          <div className="rightBlock basis-[20%] ">
            <ul className="flex justify-between">
              <li className="font-semibold hover:text-red-500">Login</li>
              <Link to="create">
                <li className="font-semibold hover:text-red-500">Createpost</li>
              </Link>
              <li className="font-semibold hover:text-red-500">
                <Link to="/">Home</Link>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </Fragment>
  );
};

export default Navbar;
