import { PageHeadProps } from "@/types";
import React from "react";

const PageHead = (props: PageHeadProps) => {
  const { name, children } = props;
  return (
    <>
      <div className="chat-left-head">
        <h3>{name}</h3>
        {children}
      </div>
    </>
  );
};

export default PageHead;
