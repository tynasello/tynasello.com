import styled from "styled-components";

import Button from "../../../components/Button";
import Link from "../../../components/Link";
import Text from "../../../components/Text";

const OldProjects = () => {
  const oldProjects: Record<string, string>[] = [
    {
      name: "Arduino Robot Car",
      link: "https://github.com/Tynasello/old-projects/tree/main/arduino-robot",
    },
    {
      name: "Arduino Color Sorter",
      link: "https://github.com/Tynasello/old-projects/tree/main/color-sorter",
    },
    {
      name: "Fullstack Blog Application",
      link: "https://github.com/Tynasello/old-projects/tree/main/blog-application",
    },
    {
      name: "Flappy Bird Recreation",
      link: "https://github.com/Tynasello/old-projects/tree/main/flappy-bird-recreation",
    },
    {
      name: "To-do App",
      link: "https://github.com/Tynasello/old-projects/tree/main/to-do-app",
    },
    {
      name: "Word Translation GUI",
      link: "https://github.com/Tynasello/old-projects/tree/main/language-translation-GUI",
    },
  ];
  return (
    <OldProjectsContainer>
      <Text type="h2" isLight>
        Older Projects
      </Text>
      <OldProjectsContentContainer>
        {oldProjects.map((project) => (
          <Link href={project.link}>
            <Button type="project">
              <Text type="psmall" isLight>
                {project.name}
              </Text>
            </Button>
          </Link>
        ))}
      </OldProjectsContentContainer>
    </OldProjectsContainer>
  );
};

export default OldProjects;

const OldProjectsContainer = styled.div`
  > * {
    margin-bottom: 1.5rem;
  }
`;

const OldProjectsContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  > * {
    margin-right: 0.8em;
    margin-bottom: 0.8rem;
  }
`;
