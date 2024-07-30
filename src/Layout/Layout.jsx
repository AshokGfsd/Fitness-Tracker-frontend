import { useEffect, useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import "./Layout.css";

const Layout = ({ children }) => {
  const [path, setPath] = useState(window.location.pathname);

  const handleClick = () => {
    setPath(window.location.pathname);
  };
  console.log(path);
  return (
    <main className="layout">
      <section className="sidebar" onClick={handleClick}>
        <Sidebar />
      </section>
      <section className="page">
        {path == "/" && (
          <img src="./public/11.jpg" alt="" className="image" srcset="" />
        )}
        {path == "/exercises" && (
          <img src="./public/15.jpg" alt="" className="image" srcset="" />
        )}
        {path == "/foods" && (
          <img src="./public/2.jpg" alt="" className="image" srcset="" />
        )}
        {path == "/goals" && (
          <img src="./public/14.jpg" alt="" className="image" srcset="" />
        )}
        {path == "/suggestion" && (
          <img src="./public/13.jpg" alt="" className="image" srcset="" />
        )}
        {path == "/user" && (
          <img src={"./public/8.jpg"} className={"image"} alt="" srcset="" />
        )}
        {children}
      </section>
    </main>
  );
};

export default Layout;
