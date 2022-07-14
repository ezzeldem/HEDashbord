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
          svg {
            font-size: 20px;
              color: var(--black);
            cursor: pointer;
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
