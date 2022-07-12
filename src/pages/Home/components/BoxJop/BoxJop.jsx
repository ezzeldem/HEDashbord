import React from "react";
import styled from "styled-components";
import Box from "../../../../components/Box/Box";
import { dashboardAreaHomeData } from "../../../../dummyData";
import {
  AreaChart,
  BarChart,
  Bar,
  Area,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BoxJopStyle = styled.div`
  /* background-color: #eee; */
  .boxContent {
    padding: 20px;
    .titleBox {
      .title {
        font-size: 20px;
        color: var(--min);
        font-weight: 400;
      }
      .prag {
        font-size: 13px;
        color: #333;
        font-weight: 350;
        padding: 2px 0 20px;
      }
    }
    .contentBox {
      text-align: center;
      .number {
        font-size: 42px;
        color: var(--min);
        font-weight: 450;
      }
    }
  }
`;



export default function BoxJop() {

  const dashboardAreaHomeDataReverse = dashboardAreaHomeData.reverse()

  return (
    <div className='row'>
      <div className='col-lg-4 col-md-6 col-12'>
        <Box paddingNull>
          <BoxJopStyle>
            <div className='boxContent'>
              <div className='titleBox'>
                <h5 className='title'>Customer</h5>
                <p className='prag'>Total customers this month</p>
              </div>
              <div className='contentBox'>
                <h6 className='number'>92556</h6>
              </div>
            </div>
            <ResponsiveContainer width='100%' height={100}>
              <BarChart width={150} height={40} data={dashboardAreaHomeData}>
              <Tooltip />
                <Bar dataKey='uv' fill='#8884d8' />
              </BarChart>
            </ResponsiveContainer>
          </BoxJopStyle>
        </Box>
      </div>
      <div className='col-lg-4 col-md-6 col-12'>
        <Box paddingNull>
          <BoxJopStyle>
            <div className='boxContent'>
              <div className='titleBox'>
                <h5 className='title'>Conversion</h5>
                <p className='prag'>Total Conversions this month</p>
              </div>
              <div className='contentBox'>
                <h6 className='number'>42342</h6>
              </div>
            </div>
            <ResponsiveContainer width='100%' height={100}>
              <AreaChart width={500} height={100} data={dashboardAreaHomeDataReverse}>
                <Tooltip />
                <Area
                  type='monotone'
                  dataKey='uv'
                  stroke='#737140'
                  fill='#737140'
                />
              </AreaChart>
            </ResponsiveContainer>
          </BoxJopStyle>
        </Box>
      </div>
      <div className='col-lg-4 col-md-6 col-12'>
        <Box paddingNull>
          <BoxJopStyle>
            <div className='boxContent'>
              <div className='titleBox'>
                <h5 className='title'>Revenue</h5>
                <p className='prag'>Total Revenues this month</p>
              </div>
              <div className='contentBox'>
                <h6 className='number'>87132</h6>
              </div>
            </div>
            <ResponsiveContainer width='100%' height={100}>
              <AreaChart width={500} height={100} data={dashboardAreaHomeData}>
                <Tooltip />
                <Area
                  type='monotone'
                  dataKey='uv'
                  stroke='rgb(229, 112, 121)'
                  fill='rgb(229, 112, 121)'
                />
              </AreaChart>
            </ResponsiveContainer>
          </BoxJopStyle>
        </Box>
      </div>
    </div>
  );
}
