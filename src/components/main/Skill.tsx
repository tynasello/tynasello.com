import styled from "styled-components";
import Text from "../common/Text";
import SkillTag from "./SkillTag";

const Skill = () => {
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
      <SkillContainer>
        <Text type="h2">Tools I have experience with ⚙️</Text>
        <SkillContent>
          {skills.map((skill) => (
            <SkillTag name={skill} />
          ))}
        </SkillContent>
      </SkillContainer>
      <SkillContainer>
        <Text type="h2">How I spend my free time 🚶‍♂️</Text>
        <SkillContent>
          {hobbies.map((hobby) => (
            <SkillTag name={hobby} />
          ))}
        </SkillContent>
      </SkillContainer>
    </>
  );
};

export default Skill;

const SkillContainer = styled.div`
  margin-bottom: 3rem;
`;
const SkillContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1.3rem 0;
  > * {
    margin-right: 0.6rem;
    margin-bottom: 0.8rem;
  }
`;
