import React from "react";

interface IProps {
  skillName: string;
}

function Skill({ skillName }: IProps) {
  return (
    <div className="inline-block px-5 py-1 border rounded-md text-md font-pop">
      {skillName}
    </div>
  );
}

export default Skill;
