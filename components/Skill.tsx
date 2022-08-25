import React from "react";

interface IProps {
  skillName: string;
}

function Skill({ skillName }: IProps) {
  return (
    <div className="bg-indigo-100 inline-block px-5 py-1 rounded-md uppercase text-md font-pop">
      {skillName}
    </div>
  );
}

export default Skill;
