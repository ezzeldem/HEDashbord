import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtoonBoxStyle = styled.div`
  a {
    padding:10px 20px;
    display: inline-block;
    border: 1px solid var(--min);
    margin: 0 20px 0 0;
    font-size: 16px;
    font-weight: 400;
    border-radius: 5px;
    background-color: var(--min);
    color: var(--white);
    &:hover{
      background-color: var(--white);
      color: var(--min);
    }
  }
`;

const ButtonBox = ({ path, children }) => {
  return (
    <ButtoonBoxStyle>
      <Link className="trans2" to={path}>{children}</Link>
    </ButtoonBoxStyle>
  );
};

export default ButtonBox;