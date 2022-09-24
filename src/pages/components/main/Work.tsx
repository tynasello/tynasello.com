import styled from "styled-components";
import Text from "../../../components/Text";
import WorkCard from "./WorkCard";

const Work = () => {
  return (
    <SWork>
      <WorkCard
        position="Software Engineer Intern"
        employer="Orbiseed Technology Inc"
        location="Toronto, ON"
        date="Sep 2022 - Present "
      ></WorkCard>

      <WorkCard
        position="Software Development Intern"
        employer="MedMe Health"
        location="Toronto, ON"
        rating="Outstanding"
        date="Jan 2022 - Apr 2022 "
      >
        <Text type="psmall">
          {" "}
          During my time at MedMe Health, I was able to grow my skills in full
          stack web development and gain experience working in an agile
          workflow. The application I worked on serves over 2,297 pharmacies
          across 10 provinces and territories in Canada. In 2021, it aided in
          administering 544,302 flu shots, 2,219,143 COVID vaccine doses, and
          155,355 COVID tests.
          <br />
          <br />
          Throughout my tenure, I completed a variety of sprint tickets
          entailing work on multiple code bases. I primarily operated on both
          the React TypeScript frontend and Java Spring Boot backend, as well as
          PostgreSQL databases. When completing frontend tickets, I had the
          opportunity to use a variety of technologies and tools including
          TypeScript, React, Apollo GraphQL, Redux, and Formik. I learned how to
          use Jest and React Testing Library, and wrote unit tests for new React
          components. Aside from working on my own tickets, I frequently code
          reviewed frontend pull requests from other developers. A large project
          I worked on at MedMe was the rollout of the COVID-19 booster dose
          module. I was responsible for implementing features that allowed
          pharmacists to view, add, and edit their patient’s last dose
          information.
          <br />
          <br />I strive to look for ways to improve existing systems. While at
          MedMe I made a tool to make the process of mapping PDFs with database
          related fields more efficient. The tool made it easier for developers
          to complete this process, and allowed the work to be outsourced to
          non-developers. Near the end of my term, I started to work on the
          backend side of the application. While completing bug fix tickets I
          gained experience using Java and other backend technologies like
          Spring Boot and Spring Data JPA.
        </Text>
      </WorkCard>
    </SWork>
  );
};

export default Work;

const SWork = styled.div`
  > * {
    margin-bottom: 2.5rem;
  }
`;
