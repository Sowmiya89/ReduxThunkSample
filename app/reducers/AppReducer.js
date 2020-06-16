
const initialState = {
  productList: [],
  error: null
}

const AppReducer = (state = initialState, actionType) => {
  console.log("Actions", actionType);
  switch (actionType.type) {
      case "GET_PRODUCT":
      return {
        ...state
      };
      case "GET_CURRENT_USER_SUCCESS":
      return {
        ...state,
        productList:actionType.payload,
      };
    default:
      return state;
  }
};

export const getProductList = state => state.productList;

export default AppReducer;
