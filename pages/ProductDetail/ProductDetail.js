import React from "react";
import { connect } from "react-redux";

const ProductDetail = () => {
  //Todo Product listing
  return <div>Show Product Detail Page</div>;
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
