import { ReactNode } from "react";
import styled from "styled-components";
import Button from "../../../components/Button";
import Link from "../../../components/Link";
import Text from "../../../components/Text";

interface Props {
  title?: string;
  description?: string;
  tags?: string[];
  liveLink?: string;
  githubLink?: string;
  image?: any;
  children?: ReactNode;
}

const ProjectCard = ({
  title,
  description,
  tags,
  liveLink,
  githubLink,
  image,
  children,
}: Props) => {
  return (
    <SProjectCard key={title}>
      {image && <ProjectImg src={image} alt="Project Image" />}
      <CardContent>
        <Text type="h2">{title}</Text>
        <Text type="psmall">{description}</Text>
        <TagsContainer>
          {tags?.map((tag) => (
            <Text key={tag} type="psmall" isLight>
              {tag}
            </Text>
          ))}
        </TagsContainer>
        <Links>
          {githubLink && (
            <Link href={githubLink}>
              <Button type="project">
                <Text type="psmall" isLight>
                  Learn More
                </Text>
              </Button>
            </Link>
          )}
          {liveLink && (
            <Link href={liveLink}>
              <Button type="project">
                <Text type="psmall" isLight>
                  Live Demo
                </Text>
              </Button>
            </Link>
          )}{" "}
        </Links>
        {children ? children : <></>}
      </CardContent>
    </SProjectCard>
  );
};

export default ProjectCard;

const SProjectCard = styled.div`
  display: flex;
  flex-direction: row;
  /* min-height: 160px; */
  @media only screen and (max-width: 560px) {
    flex-direction: column;
  }
`;
const ProjectImg = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 2rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  transition: all ease-in-out 0.4s;
  transform-origin: 100% 30%;
  @media only screen and (max-width: 560px) {
    transform-origin: 0% 100%;
  }
  &:hover {
    /* width: 160px;
    height: 160px; */
    transform: scale(1.8);
    z-index: 2;
  }
`;
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 0.3rem;
  }
`;
const TagsContainer = styled.div`
  > * {
    margin-right: 0.8rem;
  }
`;
const Links = styled.div`
  display: flex;
  margin-top: 0.5rem;
  > * {
    margin-right: 0.8rem;
  }
`;
