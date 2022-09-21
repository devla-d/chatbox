import React from "react";
import { SubmitButtonProp } from "../types";

const SubmitButton = (props: SubmitButtonProp) => {
  const { type, loading, children, function_ } = props;
  if (function_) {
    return (
      <>
        <button
          onClick={() => function_()}
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
  } else {
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
  }
};
export default SubmitButton;
