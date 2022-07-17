import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtoonBoxStyle = styled.div`
  display: inline-block;
  a {
    padding: 10px 20px;
    display: flex;
    align-items: center;
    width: fit-content;
    border: 1px solid var(--min);
    margin: 0 20px 0 0;
    font-size: 16px;
    font-weight: 400;
    border-radius: 5px;
    background-color: var(--min);
    color: var(--white);
    svg {
      padding: 0 0 0 6px;
      font-size: 20px;
    }
    &:hover {
      background-color: var(--white);
      color: var(--min);
    }
  }
  @media (max-width: 772px) {
    a{
      padding: 10px 14px;
      font-size: 12px;
    }
  }
`;

const ButtonBox = ({ path, children }) => {
  return (
    <ButtoonBoxStyle>
      <Link className='trans2' to={path}>
        {children}
      </Link>
    </ButtoonBoxStyle>
  );
};

export default ButtonBox;
