import styled from "styled-components";
import { motion } from "framer-motion";

import Main from "./main/Main";
import Link from "../components/Link";
import Text from "../components/Text";
import Header from "./intro/Header";
import About from "./intro/About";

const Landing = () => {
  return (
    <SLanding>
      <SIntro>
        <Header></Header>
        <About></About>
      </SIntro>

      <SMain>
        <Main />
      </SMain>

      <SFooter
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
      >
        <>
          <Link href="https://github.com/Tynasello/personal-portfolio">
            <Text type="psmall" isLight isLink>
              Ty Nasello 2023 ✍️ ⓒ
            </Text>
          </Link>
        </>
      </SFooter>
    </SLanding>
  );
};

export default Landing;

const SLanding = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const SIntro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  > * {
    gap: 2rem;
  }
`;

const SMain = styled.div``;

const SFooter = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-top: 6rem;
`;
