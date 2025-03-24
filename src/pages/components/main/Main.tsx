import { useState } from "react";
import styled from "styled-components";
import Projects from "./Projects";
import Interests from "./Interests";

import { motion } from "framer-motion";
import { FaFolder } from "react-icons/fa";
import { BsPersonHearts } from "react-icons/bs";
import Button from "../../../components/Button";
import Text from "../../../components/Text";

const Main = () => {
  const [section, setSection] = useState("One");

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
        <Button type="main" onClick={onClick} active={section} section="One">
          <FaFolder />
          <Text type="psmall" isBold>
            Projects
          </Text>
        </Button>
        <Button type="main" onClick={onClick} active={section} section="Two">
          <BsPersonHearts />
          <Text type="psmall" isBold>
            Interests
          </Text>
        </Button>
      </Buttons>
      <MainContent
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.1 }}
      >
        {section === "One" ? (
          <Projects />
        ) : section === "Two" ? (
          <Interests />
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
  margin: 2rem 0 0 1rem;
`;
