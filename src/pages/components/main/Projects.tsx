import styled from "styled-components";
import ProjectCard from "./ProjectCard";

import OS from "../../../assets/img/OS.png";
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
      title: "Hobbyist OS",
      description: "Custom 32-bit x86 kernel and bootloader.",
      tags: [
        "C",
        "Assembly",
        "x86",
        "Interrupt handling",
        "Scheduling",
        "Virtual Memory",
      ],
      githubLink: "https://github.com/tynasello/os",
      image: OS,
    },
    {
      title: "Event-Driven Microservices",
      description:
        "An event-driven microservices-based warehouse management system.",
      tags: ["Go", "Rust", "Kafka", "Kubernetes", "SQL", "Java", "Python"],
      githubLink: "https://github.com/Tynasello/event-driven-microservices",
      image: EDM,
    },
    {
      title: "Facial Expression Classifier",
      description:
        "Creating a convolutional neural network to classify images of people based on their emotions.",
      tags: ["CNN", "Python", "PyTorch", "NumPy", "Pandas", "Matplotlib"],
      githubLink:
        "https://github.com/Tynasello/facial-expression-classification",
      image: FEC,
    },
  ];

  return (
    <SProject>
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
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
    margin-bottom: 2rem;
  }
`;
