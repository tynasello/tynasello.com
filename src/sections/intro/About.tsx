import { motion } from "framer-motion";
import styled from "styled-components";
import Text from "../../components/Text";

const About = () => {
  return (
    <SAbout
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.6 }}
    >
      <Text type="p">
        👨‍🎓 Computer Science Student at the University of Waterloo
        <br />
        🎆 Incoming SWE Intern @Google
      </Text>

      <Text type="p">
        I am a <Text isBold>driven</Text> and <Text isBold>passionate</Text>{" "}
        learner, constantly seeking opportunities for growth both within a team
        and individually. I find the most rewarding work to be that which
        creates a meaningful impact and helps to improve the lives of others. I
        thrive best in collaborative environments where I can explore creative
        solutions to difficult problems.
      </Text>
    </SAbout>
  );
};

export default About;

const SAbout = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;
