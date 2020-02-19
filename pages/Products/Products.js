import React from "react";
import { connect } from "react-redux";

const Products = () => {
  //Todo Product listing
  return <div>Todo Product Listing</div>;
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
