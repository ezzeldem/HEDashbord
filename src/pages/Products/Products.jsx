import React from "react";
import Box from "../../components/Box/Box";
import PageHeader from "../../components/PageHeader/PageHeader";
import ProductBox from "../../components/ProductBox/ProductBox";
import TopSlider from "./Components/TopSlider";
import { productList } from "../../dummyData";
import ButtonBox from "../../components/ButtonBox/ButtonBox";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

export default function products() {
  const productListBox = productList.map((el, index) => (
    <div className='col-lg-3 col-md-4 col-12 mb-4' key={index}>
      <ProductBox
        productImg={el.img}
        productTitle={el.name}
        productDescription={el.description}
        productId={el.id}
        productCategory={el.category}
        productPrice={el.price}
      />
    </div>
  ));

  return (
    <>
      <PageHeader title='products'>
        <ButtonBox path='/addproduct'>
          Add Product <AddOutlinedIcon />
        </ButtonBox>
      </PageHeader>
      <div className='row mb-4'>
        <div className='col-md-12'>
          <TopSlider />
        </div>
      </div>
      {/* <Box> */}
      <div className='row'>{productListBox}</div>
      {/* </Box> */}
    </>
  );
}
