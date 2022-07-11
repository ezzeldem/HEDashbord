import React from "react";
import NavBarStyle from "./NavBarStyle";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
export default function NavBar({ sideBar, setSideBar, setShowSideBar ,showSideBar }) {
  const handleSideBar = () => {
    setSideBar(!sideBar);
  };
  const handleShowSideBar = () => {
    setShowSideBar(!showSideBar);
  };
  return (
    <NavBarStyle>
      <div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-6'>
              <div className='menuIcon disckMenu'>
                <MenuOutlinedIcon className='trans2' onClick={handleSideBar} />
              </div>
              <div className='menuIcon mobileMenu'>
                <MenuOutlinedIcon className='trans2' onClick={handleShowSideBar} />
              </div>
            </div>
            <div className='col-6'>
              <div className='navBox'>
                <ul className='navList'>
                  <li>
                    <a href='#'>
                      <NotificationsNoneOutlinedIcon className='trans2' />{" "}
                      <span className='number'>4</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <MailOutlineOutlinedIcon className='trans2' />{" "}
                      <span className='number'>10</span>
                    </a>
                  </li>
                </ul>
                <div className='profileBox'>
                  <img
                    src='https://color-dachbored.vercel.app/assets/img/Oval.png'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavBarStyle>
  );
}
