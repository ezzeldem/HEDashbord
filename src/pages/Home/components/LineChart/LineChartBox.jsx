import React from "react";
import { dashboardLineHomeData } from "../../../../dummyData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Box from "../../../../components/Box/Box";

export default function LineChartBox() {
  return (
    <Box title="revenye ">
      {/* <ResponsiveContainer width='100%' height={400}> */}
      <ResponsiveContainer aspect="2">
        <LineChart width={500} height={300} data={dashboardLineHomeData}>
          <CartesianGrid strokeDasharray='3 ' stroke='rgba(56, 56, 56, 0.11)' />
          <XAxis dataKey='name' stroke='rgba(56, 56, 56, 0.452)' />
          <YAxis stroke='rgba(56, 56, 56, 0.452)' />
          <Tooltip />
          <Legend />
          <Line
            type='monotone'
            dataKey='pv'
            stroke='rgb(229, 112, 121)'
            activeDot={{ r: 8 }}
          />
          <Line type='monotone' dataKey='uv' stroke='#014151' />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}
