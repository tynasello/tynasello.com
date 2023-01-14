import { motion } from "framer-motion";
import styled from "styled-components";
import Link from "../../../components/Link";
import Text from "../../../components/Text";

const About = () => {
  return (
    <SAbout
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.6 }}
    >
      <Text type="p" style={{ paddingTop: "3rem", paddingBottom: "1rem" }}>
        Quick Intro
      </Text>
      <Text type="p">
        👨‍🎓 Mechatronics Engineering at the University of Waterloo
        <br />
        👨‍💻 Previous Software Engineer Intern at Orbiseed Technology Inc
        <br />
        ✈️ Currently seeking SWE Internships
      </Text>

      <Text type="p" style={{ paddingTop: "3rem" }}>
        I am a <Text isBold>driven</Text> and <Text isBold>passionate</Text>{" "}
        learner. I enjoy tackling challenging projects that expose me to new
        areas and ways of thinking. Feel free to contact me via{" "}
        <Text type="p" isLink isLight>
          <Link href="mailto:tnasello@uwaterloo.ca">email</Link>
        </Text>{" "}
        or{" "}
        <Text type="p" isLink isLight>
          <Link href="https://www.linkedin.com/in/ty-nasello/">Linkedin</Link>
        </Text>
        {". "}I also encourage you to view my{" "}
        <Text type="p" isLink isLight>
          <Link href="https://github.com/tynasello">GitHub</Link>
        </Text>{" "}
        to see what I am currently working on.
      </Text>
    </SAbout>
  );
};

export default About;

const SAbout = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;
