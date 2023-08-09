import styled from "styled-components";
import ProjectCard from "./ProjectCard";

import CAT from "../../../assets/img/CAT.png";
import CPP from "../../../assets/img/CPP.png";
import FDA from "../../../assets/img/FDA.png";
import FEC from "../../../assets/img/FEC.png";
import EDM from "../../../assets/img/EDM.png";
import OldProjects from "./OldProjects";

const Projects = () => {
  const projects: {
    title: string;
    description: string;
    tags: string[];
    githubLink: string;
    liveLink?: string;
    image: string;
  }[] = [
    {
      title: "Event-Driven Microservices",
      description: "An event-driven microservices-based ordering system.",
      tags: ["Go", "Rust", "Kafka", "Kubernetes", "SQL", "Java", "Python"],
      githubLink: "https://github.com/Tynasello/event-driven-microservices",
      image: EDM,
    },
    {
      title: "Clean Architecture Template",
      description:
        "A project template for a monolithic application that follows the Clean Architecture design philosophy.",
      tags: ["TypeScript", "NestJS", "Docker", "PostgreSQL"],
      githubLink: "https://github.com/Tynasello/clean-nest-monolith",
      image: CAT,
    },
    {
      title: "Facial Expression Classifier",
      description:
        "Using deep learning to classify images of people based on their emotions.",
      tags: ["Python", "PyTorch", "CNN", "NumPy", "Pandas", "Matplotlib"],
      githubLink:
        "https://github.com/Tynasello/facial-expression-classification",
      image: FEC,
    },
    {
      title: "Competitive Programming Solutions",
      description:
        "GitHub repository containing solutions to practice programming problems.",
      tags: ["Python", "C++", "Java"],
      githubLink: "https://github.com/Tynasello/competitive-programming",
      image: CPP,
    },
    {
      title: "Food Delivery App",
      description:
        "A food delivery app clone, allowing users to login, browse the store, and checkout desired items in their cart.",
      tags: [
        "React.js",
        "TypeScript",
        "NestJS",
        "PostgreSQL",
        "GraphQL",
        "Prisma",
        "Docker",
        "Jest",
        "Heroku",
      ],
      githubLink: "https://github.com/Tynasello/food-delivery-app",
      liveLink: "https://tynasello.github.io/food-delivery-app/",
      image: FDA,
    },
  ];

  return (
    <SProject>
      {projects.map((project) => (
        <ProjectCard
          title={project.title}
          description={project.description}
          tags={project.tags}
          githubLink={project.githubLink}
          liveLink={project.liveLink}
          image={project.image}
        ></ProjectCard>
      ))}

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
