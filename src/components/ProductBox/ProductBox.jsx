import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Chip } from "@mui/material";
import { Link } from "react-router-dom";

export default function ProductBox({
  productImg,
  productTitle,
  productId,
  productDescription,
  productCategory,
  productPrice,
}) {
  return (
    <Card>
      <CardActionArea>
        <Link to={`/product/${productId}`}>
          <CardMedia
            component='img'
            height='160'
            image={productImg}
            alt='Product'
          />
          <CardContent
            style={{
              textAlign: "center",
            }}
          >
            <Typography
              gutterBottom
              variant='h5'
              component='div'
              style={{ color: "var(--min)" }}
            >
              {productTitle}
            </Typography>
            <div
              className='price mb-3'
              style={{
                color: "var(--oil)",
                fontWeight: "400",
                fontSize: "22px",
              }}
            >
              {productPrice}
            </div>
            {/* <Typography variant='body2' color='text.secondary' className='mb-4'>
              {productDescription.substring(1, 200)}
            </Typography> */}
            <Chip label={productCategory} />
          </CardContent>
        </Link>
      </CardActionArea>
      {/* <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
      </CardActions> */}
    </Card>
  );
}
