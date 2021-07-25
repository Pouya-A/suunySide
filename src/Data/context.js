import React, { createContext, useState } from "react";
import { DataInfo, testomonial } from "./data";

export const SiteContext = createContext();
export const SiteContextProvider = (props) => {
  const [data] = useState(DataInfo);
  const [testomonialInfo]=useState(testomonial)

  return (
    <SiteContext.Provider value={{ data ,testomonialInfo }}>
      {props.children}
    </SiteContext.Provider>
  );
};
