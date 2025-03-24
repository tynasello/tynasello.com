import styled from "styled-components";
import ProjectCard from "./ProjectCard";

import RT from "../../assets/img/RT.png";
import OS from "../../assets/img/OS.png";
import FEC from "../../assets/img/FEC.png";
import EDM from "../../assets/img/EDM.png";
import Link from "../../components/Link";
import Text from "../../components/Text";

const Projects = () => {
  const projects: {
    title: string;
    description: string;
    tags?: string[];
    links?: { text: string; href: string }[];
    image: string;
  }[] = [
    {
      title: "3D Ray Tracer",
      description:
        "3D graphics engine built without the use of external libraries.",
      tags: ["Rust"],
      links: [
        { text: "Learn More", href: "https://github.com/tynasello/raytracer" },
      ],
      image: RT,
    },
    {
      title: "Hobbyist OS",
      description: "Custom 32-bit x86 kernel and bootloader.",
      tags: [
        "C",
        "Assembly",
        "Interrupt handling",
        "Scheduling",
        "Virtual Memory",
      ],
      links: [{ text: "Learn More", href: "https://github.com/tynasello/os" }],
      image: OS,
    },
    {
      title: "Event-Driven Microservices",
      description:
        "An event-driven microservices-based warehouse management system.",
      tags: ["Kafka", "Kubernetes", "Go", "Rust", "Java", "Python", "SQL"],
      links: [
        {
          text: "Learn More",
          href: "https://github.com/Tynasello/event-driven-microservices",
        },
      ],
      image: EDM,
    },
    {
      title: "Facial Expression Classifier",
      description:
        "A convolutional neural network to classify images of people based on their emotions.",
      tags: ["Python", "PyTorch", "NumPy", "Pandas", "Matplotlib"],
      links: [
        {
          text: "Learn More",
          href: "https://github.com/Tynasello/facial-expression-classification",
        },
      ],

      image: FEC,
    },
  ];

  const oldProjects: {
    title: string;
    href: string;
  }[] = [
    {
      title: "Clean Architecture Template",
      href: "https://github.com/tynasello/random-code/tree/main/clean-architecture",
    },
    {
      title: "Robot Car",
      href: "https://github.com/tynasello/random-code/tree/main/arduino-robot",
    },

    {
      title: "Color Sorting Robot",
      href: "https://github.com/tynasello/random-code/tree/main/color-sorter",
    },
    {
      title: "Food Delivery App",
      href: "https://github.com/tynasello/random-code/tree/main/random-code/food-delivery-app",
    },
    {
      title: "and more...",
      href: "https://github.com/tynasello/random-code",
    },
  ];

  return (
    <SProjects>
      <MainProjects>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            links={project.links}
            image={project.image}
          ></ProjectCard>
        ))}
      </MainProjects>

      <OldProjects>
        <Text type="h2" isLight>
          Older Projects
        </Text>
        <OldProjectsContent>
          {oldProjects.map((project, i) => (
            <Text key={i} type="psmall" isLink isLight>
              <Link href={project.href}>
                {project.title}
                {i < oldProjects.length - 1 ? ", " : ""}
              </Link>
            </Text>
          ))}
        </OldProjectsContent>
      </OldProjects>
    </SProjects>
  );
};

export default Projects;

const SProjects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const MainProjects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const OldProjects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const OldProjectsContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 0.6rem;
`;
