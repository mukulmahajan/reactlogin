import React from "react";
import { connect } from "react-redux";
import styles from "./MyAddress.scss";

const MyAddress = () => {
  //Todo Show Address listing
  return (
    <div>
      Show Your Address Listing Here
  </div>
  )
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MyAddress);
