/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const PainelTelas = ({ property1, className, telasClassName, telas = "/img/telas-2.png" }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "frame-10",
  });

  return (
    <div className={`painel-telas ${state.property1} ${className}`}>
      {["frame-10", "frame-12"].includes(state.property1) && (
        <div className="telas-wrapper">
          <img
            className={`telas ${telasClassName}`}
            alt="Telas"
            src={state.property1 === "frame-10" ? telas : "/img/telas.png"}
          />
        </div>
      )}

      {state.property1 === "frame-11" && (
        <div className="pontos-2">
          <div className="ellipse-12" />
          <div className="ellipse-13" />
          <div className="ellipse-14" />
        </div>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "frame-11") {
    switch (action) {
      case "click":
        return {
          property1: "frame-10",
        };

      case "click_777":
        return {
          property1: "frame-12",
        };
    }
  }

  return state;
}

PainelTelas.propTypes = {
  property1: PropTypes.oneOf(["frame-12", "frame-11", "frame-10"]),
  telas: PropTypes.string,
};
