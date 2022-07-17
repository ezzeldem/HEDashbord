import React from "react";
import userImg from "../../../../assets/img/avatar3.png";
import ButtonBox from "../../../../components/ButtonBox/ButtonBox";
import ApartmentIcon from "@mui/icons-material/Apartment";
import Box from "../../../../components/Box/Box";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TopBoxStyle from "./TopBoxStyle";
import { Avatar } from "@mui/material";

export default function TopBox({ data }) {
  return (
    <TopBoxStyle>
      <Box boxShadow>
        <div className='row'>
          <div className='col-lg-8 col-md-6 col-12'>
            <div className='userDetails'>
              <div className='imgBox'>
                {/* <img src={userImg} alt='userImg' className='img-fluid' /> */}
                <Avatar alt="Remy Sharp" src={userImg}  sx={{ width: 150, height: 150 }}/>
              </div>
              <div className='userNameBox'>
                <h4 className='name'>{data.name}</h4>
                <h5 className='jop'>{data.jop}</h5>
                <h6 className='countryBox'>
                  <ApartmentIcon />
                  {data.country}
                </h6>
                <div className='linkBox d-flex mt-3'>
                  <ButtonBox path='/users'>Contact</ButtonBox>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-12'>
            <div className='sideBox'>
              <div className='ditalesBox'>
                <ul className='ditalesList'>
                  <li>
                    <span className='title'>State</span>
                    <span
                      className={`text statesBox  ${
                        data.states === "online" ? "online" : "ofline"
                      } `}
                    >
                      {data.states}
                    </span>
                  </li>
                  <li>
                    <span className='title'>Age</span>
                    <span className='text'>{data.age}</span>
                  </li>
                  <li>
                    <span className='title'>Email</span>
                    <span className='text'>{data.email}</span>
                  </li>
                </ul>
                <ul className='socialMediaList'>
                  <li>
                    <a href={data.socialMedia[0].faceBook}>
                      <FacebookIcon className='trans2' />
                    </a>
                  </li>
                  <li>
                    <a href={data.socialMedia[0].linkedin}>
                      <LinkedInIcon className='trans2' />
                    </a>
                  </li>
                  <li>
                    <a href={data.socialMedia[0].gitHup}>
                      <GitHubIcon className='trans2' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </TopBoxStyle>
  );
}
