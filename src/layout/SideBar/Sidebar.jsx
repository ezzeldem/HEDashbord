import React from "react";
import SideBarStyle from "./sideBarStyle";
import { NavLink } from "react-router-dom";
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
export default function Sidebar({ sideBar, showSideBar }) {
  return (
    <SideBarStyle
      className={`${sideBar ? "smallSide" : ""} ${
        showSideBar ? "opneSide" : ""
      }`}
    >
      <div className='logoBox'>
        <NavLink to='/'>
          <span className='logo trans2'>HE</span>
          <span className='text trans2'>DashBord</span>
        </NavLink>
      </div>
      <div className='menuWapper'>
        <h3 className='menuTitle text trans2'>Dashboard</h3>
        <ul className='listBox'>
          <li>
            <NavLink to='/'>
              <InsightsOutlinedIcon />
              <span className='text trans2'>Analytics</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/users' className='trans2'>
              <GroupOutlinedIcon/>
              <span className='text trans2'>Users</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </SideBarStyle>
  );
}
