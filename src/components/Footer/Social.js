import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ButtonGroup, IconButton } from "@chakra-ui/react";

const SocialMedia = (props) => {
  return (
    <ButtonGroup variant="ghost" color="gray.600" {...props}>
      <IconButton
        as="a"
        href="https://github.com/juanchifassio"
        aria-label="Instagram"
        isRound="true"
        target="_blank"
        icon={<FaGithub fontSize="20px" />}
      />
      <IconButton
        as="a"
        href="https://www.linkedin.com/in/juan-martin-fassio-b012b0154/"
        aria-label="Linkedin"
        isRound="true"
        target="_blank"
        icon={<FaLinkedinIn fontSize="20px" />}
      />
    </ButtonGroup>
  );
};

export default SocialMedia;
