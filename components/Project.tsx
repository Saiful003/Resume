import { AiOutlineGithub } from "react-icons/ai";
import { TbExternalLink } from "react-icons/tb";
import { IProject } from "../types";
import IconButton from "./IconButton";

function Project({ projectId, projectName, githubLink, liveLink }: IProject) {
  return (
    <div>
      <h2 className="font-lora text-xl mb-2">
        <span> {projectId} . </span> {projectName}
      </h2>
      <p className="mb-3 font-pop">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quas
        asperiores corporis enim voluptate. Atque minima aut est ullam dolores!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        velit perferendis necessitatibus quasi consectetur a qui ut
        exercitationem rem! Modi?
      </p>
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
