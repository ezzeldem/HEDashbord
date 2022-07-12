import React from "react";
import styled from "styled-components";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useNavigate } from "react-router-dom";

const PageHeaderStyle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  .prevesArrow {
    color: var(--min);
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid var(--min);
    cursor: pointer;
    svg {
      font-size: 20px;
    }
    &:hover {
      background-color: var(--min);
      color: var(--white);
    }
  }
  .title {
    margin: 0 20px;
    color: var(--min);
    font-size: 22px;
    font-weight: 600;
  }
`;

export default function PageHeader({ title }) {
  const navigate = useNavigate();

  const handlePrevesPage = () => {
    navigate(-1);
  };

  return (
    <PageHeaderStyle>
      <div className='prevesArrow trans2' onClick={handlePrevesPage}>
        <ArrowBackOutlinedIcon className='trans2' />
      </div>
      <h2 className='title'>{title}</h2>
    </PageHeaderStyle>
  );
}
