import React from 'react'
import { Link } from "react-router-dom";

    function Layout() {

        return (
            <nav>
              <ul className="flex justify-evenly items-center bg-gray-200 h-10">
                <li className="flex">
                  <Link to="/home">Home</Link>
                </li>
                <li className="flex">
                  <Link to="/blogs">Blogs</Link>
                </li>
                <li className="flex">
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="flex">
                  <Link to="/test">Test</Link>
                </li>
              </ul>
            </nav>
        )
      };
      
export default Layout;