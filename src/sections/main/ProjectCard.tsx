import { ReactNode } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Link from "../../components/Link";
import Text from "../../components/Text";

interface Props {
  title: string;
  description: string;
  tags?: string[];
  links?: { text: string; href: string }[];
  image: any;
  children?: ReactNode;
}

const ProjectCard = ({
  title,
  description,
  tags,
  links,
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
          {links?.map((link) => (
            <Link key={link.text} href={link.href}>
              <Button type="project">
                <Text type="psmall" isLight>
                  {link.text}
                </Text>
              </Button>
            </Link>
          ))}
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
  row-gap: 1rem;
  column-gap: 2rem;
  /* min-height: 160px; */
  @media only screen and (max-width: 560px) {
    flex-direction: column;
  }
`;

const ProjectImg = styled.img`
  width: 100px;
  height: 100px;

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
  gap: 0.4rem;
`;

const TagsContainer = styled.div`
  display: flex;
  column-gap: 0.8rem;
  flex-wrap: wrap;
`;

const Links = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 0.4rem;
`;
