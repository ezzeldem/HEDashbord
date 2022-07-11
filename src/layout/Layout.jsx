import React, { useState } from "react";
import NavBar from "./NavBar/NavBar";
import Sidebar from "./SideBar/Sidebar";
import LayoutStyle from "./LayoutStyle";

export default function Layout({ children }) {
  const [sideBar, setSideBar] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <LayoutStyle sideBar={sideBar} showSideBar={showSideBar}>
      {showSideBar && <div className='overLay' onClick={() => setShowSideBar(false)}></div>}
      <Sidebar sideBar={sideBar} showSideBar={showSideBar} />
      <NavBar
        setSideBar={setSideBar}
        setShowSideBar={setShowSideBar}
        sideBar={sideBar}
        showSideBar={showSideBar}
      />

      <div className='content'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12'>{children}</div>
          </div>
        </div>
      </div>
    </LayoutStyle>
  );
}
