import * as React from "react";

type Props = {
  errors: Array<string>;
};

export const ValidationComponent = (props: Props) => {
  return (
    <>
      {props.errors.map((error, i) => {
        return <h5 key={i}>{error}</h5>;
      })}
    </>
  );
};
