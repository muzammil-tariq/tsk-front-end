import client from "../axiosConfig";

export const getAll = async ({ params }) => {
  return client.get(`/products`, {
    params,
  });
};
export const brands = async () => {
  return client.get(`/brands`);
};
export const categories = async () => {
  return client.get(`/categories`);
};
export const deleteProduct = async (id) => {
  return client.delete(`/products/${id}`);
};
export const initilize = async () => {
  return client.post(`/initilize`);
};
