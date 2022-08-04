import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CustomCard({ setSelectedProduct, toggle, product }) {
  const onDetailsClick = () => {
    setSelectedProduct(product);
    toggle();
  };
  const { name } = product;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/assets/images/reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={onDetailsClick} size="small">
          Details
        </Button>
      </CardActions>
    </Card>
  );
}
