import React from "react";
import styled from "styled-components";

const BoxStyle = styled.div`
  padding: ${(props) => (props.paddingNull ? " " : "20px")};
  margin-bottom: 20px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: ${(props) =>
    props.boxShadow ? "5px 7px 18px -2px rgba(0, 0, 0, 0.096)" : "none"};
  background-color: var(--white);
  transition: 0.2s all ease-in-out;
  .boxTitle {
    padding: ${(props) => (props.paddingNull ? "20px 20px 0 20px" : "0")};
    .title {
      font-size: 20px;
      color: #adadad;
      font-weight: 400;
      text-transform: capitalize;
      padding-bottom: 26px;
    }
  }
`;

export default function Box({ title, children, boxShadow, paddingNull }) {
  return (
    <BoxStyle boxShadow={boxShadow} paddingNull={paddingNull}>
      {title && (
        <div className='boxTitle'>
          <h4 className='title'>{title}</h4>
        </div>
      )}
      {children}
    </BoxStyle>
  );
}
