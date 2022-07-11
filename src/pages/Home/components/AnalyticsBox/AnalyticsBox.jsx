import React from "react";
import Box from "../../../../components/Box/Box";
import styled from "styled-components";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const AnalyticsBoxStyle = styled.div`
  background-color: ${(props) => (props.backColor ? props.backColor : "red")};
  position: relative;
  padding: 20px;
  display: flex;
  align-items: center;
  .backsvg {
    position: absolute;
    opacity: 0.2;
    bottom: -277px;
    right: -107px;
    height: 388px;
  }
  .analyticsContent {
    padding: 0 14px;
    .subTitle {
      font-size: 14px;
      color: #eee;
      font-weight: 400;
    }
    .minTitle {
      padding: 2px 0;
      font-size: 36px;
      font-weight: 600;
      color: var(--white);
    }
  }
  .iconBox {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    border-radius: 50%;
    border: 1px solid #fff;
  }
  @media (max-width: 1200px) {
    & {
      padding: 14px;

      .analyticsContent {
        .subTitle {
          font-size: 12px;
        }
      }
    }
  }
`;
const StateBox = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 12px;
  font-weight: 300;
  border-radius: 20px;
  border: 1px solid #fff;
  padding: 4px 20px;
  background-color: #ffffff18;
  width: fit-content;
  svg {
    font-size: 16px;
  }
`;

export default function AnalyticsBox({
  title,
  icon,
  analyticsIcon,
  backColor,
  analyticsNumber,
}) {
  return (
    <Box boxShadow paddingNull>
      <AnalyticsBoxStyle backColor={backColor}>
        <div className='iconBox'>{icon}</div>
        <div className='analyticsContent'>
          <h6 className='subTitle'>{title}</h6>
          <h4 className='minTitle'>{analyticsNumber}</h4>
          <StateBox>
            {analyticsIcon === "up" ? (
              <KeyboardArrowUpOutlinedIcon />
            ) : (
              <KeyboardArrowDownOutlinedIcon />
            )}
            56%
          </StateBox>
        </div>
      </AnalyticsBoxStyle>
    </Box>
  );
}
