import axios from "axios";

export const getProduct = () => {
  return (dispatch) => {
    dispatch(getProductData());
    axios.get("https://5ee79f86ffee0c0016a12558.mockapi.io/products").then(
      (res) => {
        dispatch(getProductSuccess(res.data));
      },
      (error) => dispatch(getProductFailure(error))
    );
  };
};

const getProductData = () => ({
  type: "GET_PRODUCT",
});

const getProductSuccess = (productList) => ({
  type: "GET_CURRENT_USER_SUCCESS",
  payload: {
    ...productList,
  },
});

const getProductFailure = (error) => ({
  type: "GET_CURRENT_USER_FAILURE",
  payload: {
    error,
  },
});

