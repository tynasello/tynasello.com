import styled from "styled-components";

import Link from "../../../components/Link";
import Text from "../../../components/Text";

import { motion } from "framer-motion";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { RiGithubLine } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";
import me from "../../../assets/img/me.png";
import resume from "../../../assets/ty_nasello_resume.pdf";
import Button from "../../../components/Button";

const Header = () => {
  return (
    <SHeader>
      <Content
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <ProfileImg src={me} alt="me" />
        <Name>
          <Text type="h1">Ty Nasello</Text>
          <Hand>
            <Text type="h1">👋</Text>
          </Hand>
        </Name>
      </Content>

      <Contacts>
        <Link href="https://www.linkedin.com/in/ty-nasello/">
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Button type="contact">
              <TiSocialLinkedin />
            </Button>
          </motion.div>
        </Link>
        <Link href="https://github.com/tynasello">
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.15 }}
          >
            <Button type="contact">
              <RiGithubLine />
            </Button>
          </motion.div>
        </Link>
        <Link href="mailto:tnasello@uwaterloo.ca">
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Button type="contact">
              <MdOutlineMarkEmailUnread />
            </Button>
          </motion.div>
        </Link>
        <Link href={resume}>
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.25 }}
          >
            <Button type="contact">
              <IoDocumentTextOutline />
              <Text type="psmall" isBold isLight>
                Resume
              </Text>
            </Button>
          </motion.div>
        </Link>
      </Contacts>
    </SHeader>
  );
};

export default Header;

const SHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
const Content = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  > * {
    margin-bottom: 1.5rem;
  }
`;
const ProfileImg = styled.img`
  width: 80px;
  margin-right: 1.5rem;
  border-radius: 15px;

  transition: all 0.7s;
  &:hover {
    transform: rotate(8deg) scale(1.4);
  }
`;
const Name = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  > * {
    margin-right: 1rem;
  }
`;
const Hand = styled.div`
  cursor: default;

  animation-name: wave;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    }
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    70% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

const Contacts = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;

  > * {
    margin: 0.3rem;
  }
`;
