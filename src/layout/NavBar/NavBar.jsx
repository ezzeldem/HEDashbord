import React, { useState } from "react";
import NavBarStyle from "./NavBarStyle";
import Avatar from "@mui/material/Avatar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Badge from "@mui/material/Badge";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
export default function NavBar({
  sideBar,
  setSideBar,
  setShowSideBar,
  showSideBar,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
                <MenuOutlinedIcon
                  className='trans2'
                  onClick={handleShowSideBar}
                />
              </div>
            </div>
            <div className='col-6'>
              <div className='navBox'>
                <ul className='navList'>
                  <li>
                    <Badge color='primary' badgeContent={4}>
                      <NotificationsNoneOutlinedIcon className='trans2' />
                    </Badge>
                  </li>
                  <li>
                    <Badge color='primary' badgeContent={100}>
                      <MailOutlineOutlinedIcon className='trans2' />
                    </Badge>
                  </li>
                </ul>
                <div className='profileBox'>
                  <Tooltip title='Account settings'>
                    <Avatar
                      alt='Remy Sharp'
                      src='https://color-dachbored.vercel.app/assets/img/Oval.png'
                      onClick={handleClick}
                      size='small'
                      sx={{ ml: 2 }}
                      aria-controls={open ? "account-menu" : undefined}
                      aria-haspopup='true'
                      aria-expanded={open ? "true" : undefined}
                    />
                  </Tooltip>
                  <Menu
                    anchorEl={anchorEl}
                    id='account-menu'
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&:before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem>
                      <Avatar /> Profile
                    </MenuItem>
                    <MenuItem>
                      <Avatar /> My account
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                      <ListItemIcon>
                        <PersonAdd fontSize='small' />
                      </ListItemIcon>
                      Add another account
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <Settings fontSize='small' />
                      </ListItemIcon>
                      Settings
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <Logout fontSize='small' />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavBarStyle>
  );
}
