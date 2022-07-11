import styled from "styled-components";

const LayoutStyle = styled.div`
  height: calc(100vh - 90px);
  padding: ${(props) =>
    props.sideBar ? "30px 30px 30px 76px" : "30px 30px 30px 266px"};
  transition: all 0.4s ease-in-out;
  @media (max-width: 772px) {
    padding: 30px;
  }
  .overLay{
    opacity:0.1;
    position: fixed;
    inset: 0;
    z-index: 99;
    background-color: var(--black);
  }
`;

export default LayoutStyle;
