import React from "react";
import Box from "../../../../components/Box/Box";
import Skills from "../../../../components/Skills/Skills";
import styled from "styled-components";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

const AboutBoxStyle = styled.ul`
  .aboutBox {
    padding: 0 0 40px;
    margin: 0 0 40px;
    border-bottom: 1px solid #ddd;
    &:last-of-type {
      padding: 0 0 40px;
      margin: 0 ;
      border-bottom: none;
    }
    .title {
      font-size: 20px;
      font-weight: 500;
      color: var(--min);
      margin: 0 0 20px;
    }
  }
`;
const LangList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  li {
    margin: 0 20px 10px 0;
    font-size: 18px;
    font-weight: 500;
    color: #999;
    display: flex;
    align-items: center;
    svg {
      margin: 0  4px 0 0;
      font-size: 12px;
      color: #888;
    }
  }
`;

export default function AboutBox({ data }) {
  const skillsBox = data.skills.map((el) => <Skills text={el} />);
  const langList = data.lang.map((el) => (
    <li>
      <CircleOutlinedIcon />
      {el}
    </li>
  ));

  return (
    <AboutBoxStyle>
      <Box >
        <div className='aboutBox'>
          <h4 className='title'>About</h4>
          <p className='prag'>{data.about}</p>
        </div>
        <div className='aboutBox'>
          <h4 className='title'>Skills</h4>
          {skillsBox}
        </div>
        <div className='aboutBox'>
          <h4 className='title'>Language</h4>
          <LangList>{langList}</LangList>
        </div>
      </Box>
    </AboutBoxStyle>
  );
}
