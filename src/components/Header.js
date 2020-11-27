import React, { useContext } from "react";

import { Link } from "react-router-dom";

import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";

import { IsLoggedInContext } from "../context/IsLoggedInContext";

import PlaneIcon from "../images/airplane_wh.png";

const Header = () => {
  const { isLoggedIn } = useContext(IsLoggedInContext);
  console.log("isLoggedIn", isLoggedIn);

  const [width, height] = useWindowSize();
  const onlyWidth = useWindowWidth();
  const onlyHeight = useWindowHeight();

  return (
    <>
      <header>
        <h1 className="h2 logo">
          <Link to="/">B×travel</Link>&nbsp;
          <span>
            <img className="logoIcon" src={PlaneIcon} alt="Btrip logo"></img>
          </span>
        </h1>
        {/*<img src={Logo} alt="..."></img>*/}
        <nav>
          {onlyWidth > 700 ? (
            <>
              <Link to="/reservation">Reservation</Link>
              <Link to="/travels">Travels</Link>
            </>
          ) : (
            <>
              <div className="menu">
                <Link to="/reservation">Reservation</Link>
                <Link to="/travels">Travels</Link>
              </div>
            </>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
