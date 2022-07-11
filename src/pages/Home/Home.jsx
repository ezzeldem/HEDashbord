import React from "react";
import HomeStyle from "./HomeStyle";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import AnalyticsBox from "./components/AnalyticsBox/AnalyticsBox";
import BoxJop from "./components/BoxJop/BoxJop";
import LineChartBox from "./components/LineChart/LineChartBox";
import PieChartBox from "./components/PieChartBox/PieChartBox";

export default function Home() {
  return (
    <HomeStyle>
      <div className='row'>
        <div className='col-lg-3 col-md-6 col-12'>
          <AnalyticsBox
            title='Sales'
            analyticsNumber='94'
            backColor='#be9023'
            icon={<PersonAddAltOutlinedIcon />}
          />
        </div>
        <div className='col-lg-3 col-md-6 col-12'>
          <AnalyticsBox
            title=' Revenue Generated '
            analyticsNumber='30'
            backColor='rgb(229, 112, 121)'
            icon={<ShoppingCartOutlinedIcon />}
          />
        </div>
        <div className='col-lg-3 col-md-6 col-12'>
          <AnalyticsBox
            title=' Quarterly Sales '
            analyticsNumber='23'
            backColor='#b8b563'
            icon={<LocalAtmOutlinedIcon />}
            analyticsIcon='up'
          />
        </div>
        <div className='col-lg-3 col-md-6 col-12'>
          <AnalyticsBox
            title=' Orders Received '
            analyticsNumber='19'
            backColor='#028fb3'
            icon={<PersonAddAltOutlinedIcon />}
            analyticsIcon='up'
          />
        </div>
      </div>
      <BoxJop />
      <div className='row'>
        <div className='col-lg-8 col-md-12 col-12'>
          <LineChartBox />
        </div>
        <div className='col-lg-4 col-md-12'>
          <PieChartBox />
        </div>
      </div>
    </HomeStyle>
  );
}
