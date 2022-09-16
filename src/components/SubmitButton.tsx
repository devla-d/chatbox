import React from "react";
import { SubmitButtonProp } from "../types";

const SubmitButton = (props: SubmitButtonProp) => {
  const { type, loading, children } = props;

  return (
    <>
      <button
        className="btn btn-primary custom mt-3"
        type={type}
        disabled={loading}
      >
        {loading ? (
          <i className="fa fa-spinner fa-spin fa-1x formLoader"></i>
        ) : null}

        {children}
      </button>
    </>
  );
};

export default SubmitButton;
