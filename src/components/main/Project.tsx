import styled from "styled-components";
import ProjectCard from "./ProjectCard";

import CPP from "../../assets/img/CPP.png";
import CS from "../../assets/img/CS.png";
import CV from "../../assets/img/CV.png";
import FBA from "../../assets/img/FBA.png";
import FDA from "../../assets/img/FDA.png";
import FEC from "../../assets/img/FEC.png";
import FSBA from "../../assets/img/FSBA.png";
import RC from "../../assets/img/RC.png";
import TDA from "../../assets/img/TDA.png";
import WTA from "../../assets/img/WTA.png";

const Project = () => {
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
        githubLink="https://github.com/Tynasello/blog-api"
        liveLink="https://tynasello.github.io/blog-frontend/#/posts"
        image={FSBA}
      ></ProjectCard>
      <ProjectCard
        title="CV Builder"
        description="An intuitive React web application to create your own CV/Resume."
        tags={["JavaScript", "React.js"]}
        githubLink="https://github.com/Tynasello/cv-builder"
        liveLink="https://tynasello.github.io/cv-builder/"
        image={CV}
      ></ProjectCard>
      <ProjectCard
        title="Competitive Programming Practice"
        description="GitHub repository containing solutions to practice programming problems."
        tags={["Python", "C++", "Java"]}
        githubLink="https://github.com/Tynasello/cp-practice"
        image={CPP}
      ></ProjectCard>
      <ProjectCard
        title="To-do App"
        description="Simple task management interface created with JavaScript."
        tags={["JavaScript", "HTML/CSS", "Webpack"]}
        githubLink="https://github.com/Tynasello/to-do-app"
        liveLink="https://tynasello.github.io/to-do-app/"
        image={TDA}
      ></ProjectCard>
      <ProjectCard
        title="Flappy Bird (Recreation)"
        description="A recreation of the game Flappy Bird, programmed in Python using the PyGame library."
        tags={["Python", "Pygame"]}
        githubLink="https://github.com/Tynasello/flappy-bird"
        image={FBA}
      ></ProjectCard>
      <ProjectCard
        title="Word Translation GUI"
        description="A Python GUI that displays the translation of user inputs in selected languages."
        tags={["Python", "PyQt", "GUI"]}
        githubLink="https://github.com/Tynasello/word-translator"
        image={WTA}
      ></ProjectCard>
      <ProjectCard
        title="Arduino Color Sorter"
        description="Skittle-sorting robot controlled by Arduino Uno with C++ programming."
        tags={["C++", "Arduino", "Color Sensor", "Servo Motor"]}
        githubLink="https://github.com/Tynasello/color-sorter"
        image={CS}
      ></ProjectCard>
      <ProjectCard
        title="Arduino Robot Car"
        description="A robot car that performs certain maneuvers based on Bluetooth input."
        tags={[
          "C++",
          "Arduino",
          "Ultrasonic Sensor",
          "Motor controller",
          "Bluetooth",
        ]}
        githubLink="https://github.com/Tynasello/arduino-robot"
        image={RC}
      ></ProjectCard>
    </SProject>
  );
};

export default Project;

const SProject = styled.div`
  > * {
    margin-bottom: 5rem;
  }
`;
