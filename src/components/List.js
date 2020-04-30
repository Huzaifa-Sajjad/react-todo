import React, { Component } from "react";
import { connect } from "react-redux";

import Form from "./Form";
import Item from "./Item";

class List extends Component {
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <Form />
          <ul className="list-group mt-5">
            {this.props.groceryList.map((item) => (
              <Item item={item} key={item.id} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  groceryList: state.groceryList,
  cart: state.cart,
});

export default connect(mapStateToProps)(List);
