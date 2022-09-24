import styled from "styled-components";
import Text from "../../../components/Text";
import SkillTag from "./SkillTag";

const Skills = () => {
  const skills: string[] = [
    "TypeScript/JavaScript",
    "Git",
    "Python",
    " Node.js",
    "C++",
    "Java",
    "React.js",
    "NestJS",
    "SQL",
    "PyTorch",
    "Express.js",
    "GraphQL",
    "Prisma",
    "Docker",
    "MongoDB",
    "Jest",
    "Redux",
    "Heroku",
    "Netlify",
    "HTML/CSS",
  ];
  const hobbies: string[] = [
    "Running",
    "Exercising",
    "SWE",
    "Basketball",
    "Machine Learning",
    "Fullstack",
    "Nature",
  ];

  return (
    <>
      <SkillsContainer>
        <Text type="h2">Tools I have experience with ⚙️</Text>
        <SkillsContent>
          {skills.map((skill) => (
            <SkillTag name={skill} />
          ))}
        </SkillsContent>
      </SkillsContainer>
      <SkillsContainer>
        <Text type="h2">How I spend my free time 🚶‍♂️</Text>
        <SkillsContent>
          {hobbies.map((hobby) => (
            <SkillTag name={hobby} />
          ))}
        </SkillsContent>
      </SkillsContainer>
    </>
  );
};

export default Skills;

const SkillsContainer = styled.div`
  margin-bottom: 3rem;
`;
const SkillsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1.3rem 0;
  > * {
    margin-right: 0.6rem;
    margin-bottom: 0.6rem;
  }
`;
