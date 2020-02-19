import React from "react";
import { connect } from "react-redux";
import styles from "./AddAddress.scss";

const AddAddress = () => {
  //Todo Add Address
  return (
    <div>
    <form>
      <div className="container">
        <label for="uname"><b>City</b></label>
        <input type="text" placeholder="City" name="uname"  />
        <label for="uname"><b>Country</b></label>
        <input type="text" placeholder="country" name="uname"  />
        <label for="psw"><b>address</b></label>
        <input type="text" placeholder="Some address" name="uname"  />
        <label for="psw"><b>zip_code</b></label>
        <input type="text" placeholder="zip_code" name="uname"  />
        <button type="submit">Address</button>
        
      </div>
    </form>
  </div>
  )
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AddAddress);
