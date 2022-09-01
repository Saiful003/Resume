import { IChildren } from "../../types";

function H1({ children }: IChildren) {
  return <h1 className="text-5xl"> {children} </h1>;
}

export default H1;
