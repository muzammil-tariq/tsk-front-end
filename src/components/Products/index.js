import { Box, Typography } from "@mui/material";
import * as React from "react";
import { deleteProduct } from "../../api/v1/products";
import Modal from "../../components/modal";
import CustomCard from "../card";
import classes from "./index.module.css";
const Products = ({ products, refetch }) => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [deletModal, setDeleteModal] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const toggle = () => {
    setOpen(!open);
  };
  const onDelete = async () => {
    try {
      setLoading(true);
      await deleteProduct(selectedProduct?._id);
      await refetch();
      setDeleteModal(false);
      setLoading(false);
      setOpen(false);
      setSelectedProduct(null);
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <Box marginTop={20} rowGap={2} columnGap={2} className={classes.root}>
      {products?.map((product) => (
        <CustomCard
          setSelectedProduct={setSelectedProduct}
          toggle={toggle}
          product={product}
        />
      ))}
      <Modal
        open={deletModal}
        setOpen={setDeleteModal}
        title="Delete"
        onOk={onDelete}
      >
        <Typography variant="h6" component="h6">
          Are you sure you want to delete?
        </Typography>
      </Modal>
      <Modal
        loading={loading}
        open={open}
        setOpen={setOpen}
        title="Product Details"
        onOk={() => setDeleteModal(true)}
        okText="delete"
      >
        <Box
          rowGap={2}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" component="h6">
            {`name:${selectedProduct?.name}`}
          </Typography>
          <Typography variant="h6" component="h6">
            {`year:${selectedProduct?.year}`}
          </Typography>
          <Typography variant="h6" component="h6">
            {`price:${selectedProduct?.price}`}
          </Typography>
          <Typography variant="h6" component="h6">
            {`Category:${selectedProduct?.category?.name}`}
          </Typography>
          <Typography variant="h6" component="h6">
            {`Category:${selectedProduct?.brand?.name}`}
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};
export default Products;
