import styled from "styled-components";

const TopBoxStyle = styled.div`
  .userDetails {
    display: flex;
    align-items: center;
    margin: 0 0 10px;
    flex-wrap: wrap;
    .userNameBox {
      margin: 10px 20px;
      .name {
        font-size: 26px;
        color: var(--min);
        font-weight: 400;
      }
      .jop {
        font-size: 14px;
        color: #333;
        margin: 6px 0;
        font-weight: 400;
      }
      .countryBox {
        color: var(--sc);
        font-size: 14px;
        svg {
          margin-bottom: -4px;
          font-size: 22px;
        }
      }
    }
  }
  .sideBox {
    padding: 0 20px;
    height: 100%;
    border-left: 1px solid #ddd;
    .ditalesList {
      li {
        margin: 0 0 14px;
        display: flex;
        align-items: center;
        .title {
          font-size: 16px;
          font-weight: 450;
          color: #414141;
          min-width: 30px;
        }
        .text {
          margin: 0 20px;
          font-size: 14px;
          font-weight: 400;
          color: var(--sc);
        }
      }
    }
    .socialMediaList {
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        margin: 10px;
        a {
          svg {
            font-size: 26px;
            color: var(--min);
            &:hover {
              color: var(--sc);
            }
          }
        }
      }
    }
  }
  @media (max-width: 772px) {
    .sideBox {
      padding: 20px 0 0;
      border-left: none;
      border-top: 1px solid #ddd;
    }
  }
`;

export default TopBoxStyle;
