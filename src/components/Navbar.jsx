import { navIcons, navLinks } from "#constants";
import useWindowStore from "#store/window";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const { openWindow } = useWindowStore();
  const [currentTime, setCurrentTime] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs());
    }, 1000); // update every second
    return () => clearInterval(interval); // cleanup on unmount
  }, []);
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="" />
        <p className="font-bold">Yogi's Portfolio</p>
        <ul>
          {navLinks.map(({ id, name, type }) => {
            return (
              <li key={id} onClick={() => openWindow(type)}>
                <p>{name}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} alt={`icon-${id}`} className="icon-hover" />
            </li>
          ))}
        </ul>
        <time>{currentTime.format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
