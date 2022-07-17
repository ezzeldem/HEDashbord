import React from "react";
import { useParams } from "react-router-dom";
import SingleUserStyle from "./SingleUserStyle";
import PageHeader from "../../components/PageHeader/PageHeader";
import { usersData } from "../../dummyData";
import TopBox from "./components/TopBox/TopBox";
import DetailsBox from "./components/DetailsBox/DetailsBox";
import FeedBackBox from "./components/FeedBackBox/FeedBackBox";
import AboutBox from "./components/AboutBox/AboutBox";
export default function SingleUser() {
  const params = useParams();
  const data = usersData[params.id];

  return (
    <SingleUserStyle>
      <PageHeader title='All Users' />
      <TopBox data={data} />
      <div className='row'>
        <div className='col-lg-3 col-md-12 col-12'>
          <DetailsBox data={data} />
        </div>
        <div className='col-lg-6 col-md-12 col-12'>
          <AboutBox data={data}/>
        </div>
        <div className='col-lg-3 col-md-12 col-12 '>
          <FeedBackBox data={data}/>
        </div>
      </div>
    </SingleUserStyle>
  );
}
