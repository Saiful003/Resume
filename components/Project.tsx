import { AiOutlineGithub } from "react-icons/ai";
import { TbExternalLink } from "react-icons/tb";
import { IProject } from "../types";
import IconButton from "./IconButton";
import Skill from "./Skill";

function Project({
  projectId,
  projectName,
  githubLink,
  liveLink,
  tech: { fTech, bTech },
}: IProject) {
  return (
    <div>
      <h2 className="font-lora text-xl pb-2 mb-2">
        <span> {projectId} . </span> {projectName}
      </h2>
      <div className="flex flex-col gap-3 mb-3">
        <div className="flex items-center gap-3 ">
          <h2 className="text-lg">Front-End Technologies :</h2>
          <div className="flex gap-2">
            {fTech.map((tech, i) => (
              <Skill skillName={tech} key={i} />
            ))}
          </div>
        </div>
        {bTech && (
          <div className="flex items-center gap-3">
            <h2 className="text-lg">Back-End Technologies :</h2>
            <div className="flex gap-2">
              {bTech.map((tech, i) => (
                <Skill skillName={tech} key={i} />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-2 mb-3">
        <IconButton
          style="hover:bg-gray-200"
          link={githubLink}
          border
          text="Github"
          icon={<AiOutlineGithub />}
        />
        <IconButton
          style="hover:bg-gray-200"
          link={liveLink}
          border
          text="Live"
          icon={<TbExternalLink />}
        />
      </div>
    </div>
  );
}

export default Project;
