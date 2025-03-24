import styled from "styled-components";

import Link from "../../../components/Link";
import Text from "../../../components/Text";

const OldProjects = () => {
  return (
    <OldProjectsContainer>
      <Text type="h2" isLight>
        Older Projects
      </Text>
      <OldProjectsContentContainer>
        <Text type="psmall" isLink isLight>
          <Link href="https://github.com/tynasello/random-code/tree/main/clean-architecture">
            Clean Architecture Template,
          </Link>
        </Text>
        <Text type="psmall" isLink isLight>
          <Link href="https://github.com/tynasello/random-code/tree/main/arduino-robot">
            Robot Car,
          </Link>
        </Text>
        <Text type="psmall" isLink isLight>
          <Link href="https://github.com/tynasello/random-code/tree/main/color-sorter">
            Color Sorting Robot,
          </Link>
        </Text>
        <Text type="psmall" isLink isLight>
          <Link href="https://github.com/tynasello/random-code/tree/main/random-code/food-delivery-app">
            Food Delivery App,
          </Link>
        </Text>
        <Text type="psmall" isLink isLight>
          <Link href="https://github.com/tynasello/random-code">
            and more...
          </Link>
        </Text>
      </OldProjectsContentContainer>
    </OldProjectsContainer>
  );
};

export default OldProjects;

const OldProjectsContainer = styled.div`
  > * {
    margin-bottom: 0.5rem;
  }
`;

const OldProjectsContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  > * {
    margin-right: 0.8rem;
    margin-bottom: 0.8rem;
  }
`;
