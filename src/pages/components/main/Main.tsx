import { useState } from "react";
import styled from "styled-components";
import Projects from "./Projects";
import Work from "./Work";
import Skills from "./Skills";

import { motion } from "framer-motion";
// import { AiFillTool } from "react-icons/ai";
import { FaFolder } from "react-icons/fa";
// import { MdOutlineWork } from "react-icons/md";
import Button from "../../../components/Button";
import Text from "../../../components/Text";

const Main = () => {
  const [section, setSection] = useState("Project");

  const onClick = (section: string) => {
    setSection(section);
  };

  return (
    <SMain>
      <Buttons
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.75 }}
      >
        <Button
          type="main"
          onClick={onClick}
          active={section}
          section="Project"
        >
          <FaFolder />
          <Text type="psmall" isBold>
            Projects
          </Text>
        </Button>
        {/* <Button type="main" onClick={onClick} active={section} section="Work">
          <MdOutlineWork />
          <Text type="psmall" isBold>
            Work Experience
          </Text>
        </Button> */}
        {/* <Button type="main" onClick={onClick} active={section} section="Skill">
          <AiFillTool />
          <Text type="psmall" isBold>
            Skills
          </Text>
        </Button> */}
      </Buttons>
      <MainContent
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.1 }}
      >
        {section === "Project" ? (
          <Projects />
        ) : section === "Work" ? (
          <Work />
        ) : section === "Skill" ? (
          <Skills />
        ) : (
          <></>
        )}
      </MainContent>
    </SMain>
  );
};

export default Main;

const SMain = styled.div`
  display: flex;
  flex-direction: column;
`;
const Buttons = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  > * {
    margin: 0 1rem 1rem 0;
  }
`;
const MainContent = styled(motion.div)`
  margin: 3rem 0 0 1rem;
`;
