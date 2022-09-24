import { motion } from "framer-motion";
import styled from "styled-components";
import Link from "../../components/Link";
import Text from "../../components/Text";

function Footer() {
  return (
    <SFooter
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 1 }}
    >
      <FooterContent>
        <Link href="https://github.com/Tynasello/personal-portfolio">
          <Text type="psmall" isLight>
            Ty Nasello 2022 ✌️ ⓒ
          </Text>
        </Link>
      </FooterContent>
    </SFooter>
  );
}

export default Footer;

const SFooter = styled(motion.div)`
  cursor: pointer;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;
const FooterContent = styled.div`
  transition: all 0.4s ease;
  &:hover {
    transform: translateY(-4px);
  }
`;
