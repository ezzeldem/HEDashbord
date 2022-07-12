import React from "react";
import Box from "../../../../components/Box/Box";
import styled from "styled-components";

const DetailsListStyle = styled.ul`
  li {
    display: flex;
    align-items: center;
    margin: 20px 0;
    .title {
      text-transform: capitalize;
      font-size: 16px;
      color: var(--min);
      min-width: 60px;
      font-weight: 500;
    }
    .details {
      padding: 0 20px;
      font-size: 14px;
      color: #555;
      font-weight: 400;
    }
  }
`;

export default function DetailsBox({ data }) {
  const detailsList = Object.keys(data.detailsList[0]).map((el) => (
    <li>
      <span className='title'>{el} :</span>
      <span className='details'>{data.detailsList[0][el]}</span>
    </li>
  ));
  return (
    <Box title='Details'>
      <DetailsListStyle>{detailsList}</DetailsListStyle>
    </Box>
  );
}
