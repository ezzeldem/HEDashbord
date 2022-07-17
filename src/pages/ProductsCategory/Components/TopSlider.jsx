import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Chip from "@mui/material/Chip";
import styled from "styled-components";
import { productList } from "../../../dummyData";

const ProducSlider = styled.div`
  .slick-dots {
    bottom: 15px;
    li {
      button {
        &::before {
          background-color: #fff;
          height: 2px;
          width: 20px;
          content: "";
          transition: 0.2s all ease-in-out;
        }
      }
    }
  }
`;
const ProductSliderItem = styled.div`
  height: 300px;
  /* background-color: red; */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.backImgBox});
  position: relative;
  z-index: 1;
  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    opacity: 0.4;
    background-color: #000000;
  }
  .broductBox {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 50px;

    .title {
      font-size: 28px;
      color: #fff;
      font-weight: 300;
    }
    .category {
      .css-gac2fo-MuiChip-root {
        color: #fff;
      }
    }
  }
`;

export default function TopSlider() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    fade: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const productSliderItemBox = productList.map((el) => (
    <ProductSliderItem backImgBox={el.img} key={el.id} > 
      <div className='broductBox'>
        <h3 className='title'>{el.name}</h3>
        <h4 className='category mt-2'>
          <Chip label={el.category} />
        </h4>
      </div>
    </ProductSliderItem>
  ));

  return (
    <ProducSlider>
      <Slider {...settings}>{productSliderItemBox}</Slider>
    </ProducSlider>
  );
}
