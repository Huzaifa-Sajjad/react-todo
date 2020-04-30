import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteItem } from "../redux/actions/groceryList";

import Form from "./Form";

class Item extends Component {
  state = {
    isEditable: false,
  };

  toggleEdit = (e) => {
    this.setState({ isEditable: !this.state.isEditable });
  };

  handleDeleteItem = (e) => {
    this.props.deleteItem(e.target.id);
  };

  render() {
    const item = this.props.item.item;
    const id = this.props.item.id;
    const status = this.props.item.status;
    return (
      <>
        <li className="list-group-item">
          {this.state.isEditable === false ? (
            <>
              <div>
                <h4 className={`${status === true ? "done" : ""}`}>{item}</h4>
              </div>
              <div>
                <button className="btn btn-success mr-3" id={id}>
                  Done
                </button>
                <button
                  className="btn btn-primary mr-3"
                  onClick={this.toggleEdit}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  id={id}
                  onClick={this.handleDeleteItem}
                >
                  Delete
                </button>
              </div>
            </>
          ) : (
            <Form
              isEdit={true}
              item={item}
              id={id}
              toggleForm={this.toggleEdit}
            />
          )}
        </li>
      </>
    );
  }
}

export default connect(null, { deleteItem })(Item);
