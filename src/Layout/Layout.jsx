import { useEffect, useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import "./Layout.css";

const Layout = ({ children }) => {
  const [path, setPath] = useState(window.location.pathname);

  const handleClick = () => {
    setPath(window.location.pathname);
  };
  return (
    <main className="layout">
      <section className="sidebar" onClick={handleClick}>
        <Sidebar />
      </section>
      <section className="page">
        {path == "/" && <img src="./11.jpg" alt="" className="image" />}
        {path == "/exercises" && (
          <img src="./15.jpg" alt="" className="image" />
        )}
        {path == "/foods" && <img src="./2.jpg" alt="" className="image" />}
        {path == "/goals" && <img src="./14.jpg" alt="" className="image" />}
        {path == "/suggestion" && (
          <img src="./13.jpg" alt="" className="image" />
        )}
        {path == "/user" && <img src={"./8.jpg"} className={"image"} alt="" />}
        {children}
      </section>
    </main>
  );
};

export default Layout;
