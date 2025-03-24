import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Button from "../../components/Button";
import Text from "../../components/Text";

import Projects from "./Projects";
import Interests from "./Interests";

import { FaFolder } from "react-icons/fa";
import { BsPersonHearts } from "react-icons/bs";
import { Theme } from "../../theme/Theme";

const Main = () => {
  const sections: {
    title: string;
    content: JSX.Element;
    icon: JSX.Element;
    sectionNumber: number;
    backgroundColor: string;
  }[] = [
    {
      title: "Projects",
      content: <Projects />,
      icon: <FaFolder />,
      sectionNumber: 1,
      backgroundColor: Theme.colors.onea,
    },
    {
      title: "Interests",
      content: <Interests />,
      icon: <BsPersonHearts />,
      sectionNumber: 2,
      backgroundColor: Theme.colors.twoa,
    },
  ];

  const [activeSection, setActiveSection] = useState(sections[0].sectionNumber);

  return (
    <SMain>
      <Buttons
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.75 }}
      >
        {sections.map((section) => (
          <Button
            key={section.title}
            type="section"
            activeSectionNumber={
              sections.find(
                (section) => section.sectionNumber === activeSection
              )?.sectionNumber
            }
            sectionNumber={section.sectionNumber}
            onClick={() => {
              setActiveSection(section.sectionNumber);
            }}
          >
            {section.icon}
            <Text type="psmall" isBold>
              {section.title}
            </Text>
          </Button>
        ))}
      </Buttons>

      <MainContent
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.1 }}
      >
        {
          sections.find((section) => section.sectionNumber === activeSection)
            ?.content
        }
      </MainContent>
    </SMain>
  );
};

export default Main;

const SMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Buttons = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const MainContent = styled(motion.div)``;
