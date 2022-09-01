import React from "react";
import IconButton from "./IconButton";
import Divider from "./Divider";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";

function Header() {
  return (
    <div className="flex  gap-5 justify-between">
      <div>
        <h2 className="text-3xl font-lora mb-1">Md Saiful Islam Shanto.</h2>
        <p className="font-lora text-sm">Frontend Web Developer</p>
        <p className="font-lora text-sm">Dhaka,Bangladesh</p>
      </div>
      <div className="flex flex-col gap-1">
        <IconButton
          text="mdsaifulislamshanto03@gmail.com"
          icon={<AiOutlineMail />}
        />
        <IconButton text="01774757817" icon={<AiOutlinePhone />} />
        <div className="flex items-center gap-1">
          <IconButton
            link="https://github.com/Saiful003"
            hover
            text="Github"
            icon={<AiOutlineGithub />}
          />
          <Divider />
          <IconButton hover text="Linkedin" icon={<AiOutlineLinkedin />} />
        </div>
      </div>
    </div>
  );
}

export default Header;
