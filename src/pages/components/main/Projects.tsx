import styled from "styled-components";
import ProjectCard from "./ProjectCard";

import CPP from "../../../assets/img/CPP.png";
import CV from "../../../assets/img/CV.png";
import FDA from "../../../assets/img/FDA.png";
import FEC from "../../../assets/img/FEC.png";
import FSBA from "../../../assets/img/FSBA.png";
import OldProjects from "./OldProjects";

const Projects = () => {
  return (
    <SProject>
      <ProjectCard
        title="Facial Expression Classifier"
        description="Using deep learning to classify images of people based on their emotions."
        tags={["Python", "PyTorch", "CNN", "NumPy", "Pandas", "Matplotlib"]}
        githubLink="https://github.com/Tynasello/facial-expression-classification"
        image={FEC}
      ></ProjectCard>
      <ProjectCard
        title="Food Delivery App"
        description="A food delivery app clone, allowing users to login, browse the store, and checkout desired items in their cart."
        tags={[
          "TypeScript",
          "NestJS",
          "PostgreSQL",
          "React.js",
          "GraphQL",
          "Prisma",
          "JWT",
          "Docker",
          "Jest",
          "Heroku",
        ]}
        githubLink="https://github.com/Tynasello/food-delivery-app"
        liveLink="https://tynasello.github.io/food-delivery-app/"
        image={FDA}
      ></ProjectCard>
      <ProjectCard
        title="Fullstack Blog Application"
        description="A blog application where users can view and interact with posts. A login system with protected endpoints exists for the admin to manage posts."
        tags={[
          "TypeScript",
          "Node.js",
          "Express.js",
          "React.js",
          "MongoDB",
          "JWT",
        ]}
        githubLink="https://github.com/Tynasello/old-projects/tree/main/blog-application"
        image={FSBA}
      ></ProjectCard>
      <ProjectCard
        title="CV Builder"
        description="An intuitive React web application to create your own CV/Resume."
        tags={["JavaScript", "React.js"]}
        githubLink="https://github.com/Tynasello/old-projects/tree/main/cv-builder"
        liveLink="https://tynasello.github.io/cv-builder/"
        image={CV}
      ></ProjectCard>
      <ProjectCard
        title="Competitive Programming Solutions"
        description="GitHub repository containing solutions to practice programming problems."
        tags={["Python", "C++", "Java"]}
        githubLink="https://github.com/Tynasello/competitive-programming"
        image={CPP}
      ></ProjectCard>

      <OldProjects />
    </SProject>
  );
};

export default Projects;

const SProject = styled.div`
  > * {
    margin-bottom: 5rem;
  }
`;
