import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductList} from './reducers/AppReducer';
import { getProduct } from "./actions/AppAction";
import "./App.css";

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const products = this.props.products;
    const { updateProduct,getProduct } = this.props;
    var list = Object.values(products).map((product) => {
      return (
        <div className="product_style" key={product.productId}>
          <img src={product.imageURL} alt="image" width="20%" height="20%" />
          <p>
            Quantity :
            <input
              id="field"
              type="text"
              onChange={(e) =>
                updateProduct(product.productId,e.target.value)
              }
              value={product.weight}
            />
          </p>
        </div>
      );
    });

    return (
      <div>
        <h1> List of Products</h1>
        {list}
        <br />
        <button onClick={(e) => getProduct()}>Get Products</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: getProductList(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  getProduct:() => dispatch(getProduct()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
