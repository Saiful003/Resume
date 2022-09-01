import React from "react";

export interface ISkill {
  skillName: string;
}
export interface IChildren {
  children: React.ReactNode;
}

export interface IProject {
  projectName: string;
  projectId: number;
  projectShortDesc: string;
  githubLink: string;
  liveLink: string;
  tech: {
    fTech: string[];
    bTech?: string[];
  };
}
