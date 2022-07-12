import React from "react";
import Box from "../../../../components/Box/Box";
import feedBackBox from "../../../../assets/img/feedBackBox.png";
import styled from "styled-components";

const FeedBackBoxStyle = styled.div`
  text-align: center;
  img {
    height: 140px;
  }
  .prag{
    font-size: 14px;
    text-align: initial;
  }
`;

export default function FeedBackBox({ data }) {
  return (
    <Box title='Feed Back'>
      <FeedBackBoxStyle>
        <img src={feedBackBox} className='img-fluid' alt='' />
        <p className='prag'>{data.feedBack}</p>
      </FeedBackBoxStyle>
    </Box>
  );
}
