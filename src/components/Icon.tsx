import React from "react";

const Icon = (props: { image: string }) => {
  return (
    <div>
      <img src={props.image} />
    </div>
  );
};

export default Icon;
