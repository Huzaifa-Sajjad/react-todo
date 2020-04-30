import React, { Component } from "react";
import shortid from "shortid";
import { connect } from "react-redux";
import { addItem, editItem } from "../redux/actions/groceryList";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: `${this.props.item ? this.props.item : ""}`,
    };
  }

  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  resetState = () => {
    this.setState({ item: "" });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.props.isEdit) {
      const groceryItem = {
        id: shortid.generate(),
        item: this.state.item,
        status: false,
      };
      this.props.addItem(groceryItem);
      this.resetState();
    } else {
      this.props.editItem(this.props.id, this.state.item);
      this.props.toggleForm();
    }
  };

  render() {
    return (
      <>
        <form
          onSubmit={this.handleSubmit}
          className={`${!this.props.isEdit ? "my-4" : "w-100"}`}
        >
          <input
            type="text"
            className="form-control form-control-lg"
            name="item"
            placeholder="Grocery Item ..."
            value={this.state.item}
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-success btn-lg mb-2">
            {!this.props.isEdit ? "Add Item" : "Save"}
          </button>
        </form>
      </>
    );
  }
}

export default connect(null, { addItem, editItem })(Form);
