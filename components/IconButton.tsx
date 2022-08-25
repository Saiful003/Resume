import React from "react";

interface IProps {
  icon: React.ReactNode;
  text?: string;
  hover?: boolean;
  link?: string;
  border?: boolean;
  style?: string;
}

function IconButton({ icon, text, hover, link, border, style }: IProps) {
  return (
    <a
      href={link}
      className={`w-max flex items-center gap-2 py-1 rounded-md bg-white ${
        hover && "hover:underline cursor-pointer"
      } ${border && `border cursor-pointer ${style} px-2`}`}
    >
      <div className="text-xl"> {icon} </div>
      <div className="font-pop">{text}</div>
    </a>
  );
}

export default IconButton;
