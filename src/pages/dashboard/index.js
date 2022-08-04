import { Box, TextField } from "@mui/material";
import * as React from "react";
import Products from "../../components/Products";
import useSearch from "../../hooks/useSearch";
import CustomSelect from "../../components/customSelect";
import classes from "./index.module.css";
import { getAll, brands, categories, initilize } from "../../api/v1/products";
const Dashboard = () => {
  const [products, setProducts] = React.useState([]);
  const [selectedBrands, setBrands] = React.useState([]);
  const [category, setCategory] = React.useState([]);
  const { search, onSearchChange } = useSearch();
  React.useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    const products = await getAll({
      params: {
        text: search,
        brands: JSON.stringify(selectedBrands),
        categories: JSON.stringify(category),
      },
    });
    setProducts(products.data.data);
  };
  React.useEffect(() => {
    return () => {
      (async () => {
        await initilize();
      })();
    };
  }, []);
  React.useEffect(() => {
    getProducts();
  }, [search, selectedBrands, category]);
  return (
    <Box className={classes.root}>
      <Box>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          <TextField
            onChange={onSearchChange}
            fullWidth
            label="Search"
            id="fullWidth"
          />
        </Box>
      </Box>
      <Box>
        <CustomSelect
          api={brands}
          selected={selectedBrands}
          setSelected={setBrands}
          label="brands"
        />
      </Box>
      <Box>
        <CustomSelect
          api={categories}
          selected={category}
          setSelected={setCategory}
          label="category"
        />
      </Box>
      <Products products={products} refetch={getProducts} />
    </Box>
  );
};
export default Dashboard;
