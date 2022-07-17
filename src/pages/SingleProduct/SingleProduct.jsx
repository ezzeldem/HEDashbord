import React from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader/PageHeader";
import { productList } from "../../dummyData";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
export default function SingleProduct() {
  const params = useParams();
  const data = productList[params.id];
  return (
    <div>
      <PageHeader title={data.name}>
        <Button variant='contained' disableElevation>
          Add To Cart  <AddShoppingCartIcon className="ms-2" />
        </Button>
      </PageHeader>
      <div className='row'>
        <div className='col-md-6'></div>
        <div className='col-md-6'></div>
      </div>
    </div>
  );
}
