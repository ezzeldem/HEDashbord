import styled from "styled-components";

const SideBarStyle = styled.div`
  position: fixed;
  left: 0;
  width: 240px;
  background-color: var(--white);
  z-index: 9999;
  transition: 0.4s all ease-in-out;
  top: 0;
  bottom: 0;
  box-shadow: 1px 12px 32px -11px #00000022;
  .logoBox {
    padding: 20px;
    a {
      display: flex;
      align-items: flex-end;
      color: var(--min);
      .logo {
        font-size: 30px;
        font-weight: 500;
      }
      .text {
        font-size: 14px;
        font-weight: 500;
        margin: 0 0 4px 10px;
      }
    }
  }
  .menuWapper {
    margin: 20px 0;
    .menuTitle {
      padding: 0 20px 10px;
      font-size: 16px;
      font-weight: 400;
      color: var(--oil);
    }
    .listBox {
      li {
        margin-bottom: 4px;
        a {
          display: flex;
          align-items: center;
          cursor: pointer;
          font-size: 16px;
          color: var(--balck);
          text-transform: capitalize;
          padding: 6px 20px;
          border-right: 4px solid var(--white);
          transition: var(--trans);
          position: relative;
          z-index: 1;
          &:after {
            content: "";
            top: 0;
            bottom: 0;
            right: 0;
            background: linear-gradient(
              90deg,
              rgba(2, 0, 36, 0) 0%,
              var(--min) 600%
            );
            /* opacity: 0; */
            transition: inherit;
            position: absolute;
            z-index: -1;
            width: 0;
          }
          &.active {
            border-right: 4px solid var(--min);
            color: var(--min);
            &:after {
              width: 100%;
              /* opacity: 1; */
            }
          }
          svg {
            font-size: 20px;
          }
          .text {
            margin-left: 10px;
          }
        }
      }
    }
  }
  &.smallSide {
    width: 66px;
    .logoBox {
      padding: 20px 10px;
    }
    .text {
      visibility: hidden !important;
      opacity: 0 !important;
    }
    &:hover {
      width: 240px;
      .text {
        visibility: visible !important;
        opacity: 1 !important;
      }
    }
  }
  @media (max-width: 772px) {
    left: -260px;
  }
  &.opneSide {
    left: 0 !important;
  }
`;

export default SideBarStyle;

