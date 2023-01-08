import styled from "styled-components";
import Text from "../../../components/Text";
import SkillTag from "./SkillTag";

const Skills = () => {
  const skills: string[] = [
    "TypeScript/JavaScript",
    "Python",
    "Java",
    "C++",
    "SQL",
    "C",
    "C#",
    "Swift",
    "HTML/CSS",
  ];

  const tools: string[] = [
    "Git",
    "Node.js",
    "React.js",
    "NestJS",
    "Express.js",
    "Docker",
    "GraphQL",
    "PostgreSQL",
    "MongoDB",
    "Jest",
    "PyTorch",
    "Prisma",
  ];

  const hobbies: string[] = [
    "Running",
    "Exercising",
    "SWE",
    "Basketball",
    "Nature",
  ];

  return (
    <>
      <SkillsContainer>
        <Text type="h2">Programming skills 👨‍💻</Text>
        <SkillsContent>
          {skills.map((skill) => (
            <SkillTag name={skill} />
          ))}
        </SkillsContent>
      </SkillsContainer>
      <SkillsContainer>
        <Text type="h2">Other tools I am familiar with ⚙️</Text>
        <SkillsContent>
          {tools.map((skill) => (
            <SkillTag name={skill} />
          ))}
        </SkillsContent>
      </SkillsContainer>
      <SkillsContainer>
        <Text type="h2">Some of my interests 🚶‍♂️</Text>
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
  margin-bottom: 2rem;
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
