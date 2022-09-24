import styled from "styled-components";

import About from "./About";
import Header from "./Header";

function Intro() {
  return (
    <SIntro>
      <Header></Header>
      <About></About>
    </SIntro>
  );
}

export default Intro;

const SIntro = styled.div`
  margin-bottom: 5rem;
`;
