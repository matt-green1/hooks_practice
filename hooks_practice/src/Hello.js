import React from "react";

export const Hello = () => {
  React.useEffect(() => {
    console.log("render");

    //cleanup function (stand in for an unmount here)
    return () => {
      console.log("unmount");
    };
  }, []);

  return <div>hello</div>;
};