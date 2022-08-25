import React from "react";

interface IProps {
  children: React.ReactNode;
  center?: boolean;
}

function SectionTitle({ children, center }: IProps) {
  return (
    <h2
      className={`text-2xl mb-3 font-lora uppercase border-y border-y-gray-200 leading-normal py-1 ${
        center && "text-center"
      } `}
    >
      {children}
    </h2>
  );
}

export default SectionTitle;
