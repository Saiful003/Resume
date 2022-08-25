import React from "react";

interface IProps {
  children: React.ReactNode;
}

function Section({ children }: IProps) {
  return <section className="py-2 mb-5"> {children} </section>;
}

export default Section;
