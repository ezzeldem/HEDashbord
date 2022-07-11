import styled from "styled-components";

const NavBarStyle = styled.div`
  margin-bottom: 20px;
  /* padding: 10px; */
  border-radius: 5px;
  /* background-color: var(--white); */
  /* box-shadow: 1px 12px 32px -11px #00000022; */
  .menuIcon {
    &.mobileMenu {
      display: none;
    }
    svg {
      cursor: pointer;
      font-size: 30px;
      color: var(--min);
      &:hover {
        color: var(--sc);
      }
    }
  }
  .navBox {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .navList {
      display: flex;
      align-items: center;
      margin: 0 20px 0;
      li {
        margin: 0 10px;
        a {
          position: relative;
          display: inline-block;
          svg {
            font-size: 20px;
            color: var(--black);
          }
          .number {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 18px;
            height: 18px;
            position: absolute;
            top: -10px;
            right: -6px;
            font-size: 13px;
            border-radius: 50%;
            color: var(--white);
            background-color: var(--sc);
          }
        }
      }
    }
    .profileBox {
      img {
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
  }
  @media (max-width: 772px) {
    .menuIcon {
      &.mobileMenu{
        display: block;
      }
      &.disckMenu {
        display: none;
      }
    }
  }
`;

export default NavBarStyle;
