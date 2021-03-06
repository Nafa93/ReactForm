import * as React from "react";

interface Props {
  userName: string;
}

export const HelloComponent = (props: Props) => <h1>Hello {props.userName}</h1>;
