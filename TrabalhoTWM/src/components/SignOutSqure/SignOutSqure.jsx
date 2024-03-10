/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SignOutSqure = ({ className, signOutSqure = "/img/sign-out-squre.png" }) => {
  return <img className={`sign-out-squre ${className}`} alt="Sign out squre" src={signOutSqure} />;
};

SignOutSqure.propTypes = {
  signOutSqure: PropTypes.string,
};
