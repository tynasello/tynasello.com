import styled from "styled-components";
import LineBreak from "../../../components/LineBreak";
import Text from "../../../components/Text";
import WorkCard from "./WorkCard";

const Work = () => {
  return (
    <SWork>
      <WorkCard
        position="Software Engineer Intern"
        employer="Orbiseed Technology Inc."
        location="Toronto, ON (Remote)"
        rating="Outstanding"
        date="Sep 2022 - Oct 2022 (ceased operations)"
      >
        <Text type="psmall">
          My work at Orbiseed touched multiple aspects of software development.
          My focus was on the back end, where I developed various features for
          an application that enables insurance carriers and brokers to process
          and summarize documents more effectively and 6x faster than humans.
          <LineBreak />
          My primary contributions consisted of creating and modifying numerous
          REST API endpoints in an Onion Architecture. I did so while practicing
          aspects of domain-driven design using Express.js, TypeScript, and
          MongoDB. I also made multiple client-facing front-end changes using
          React.js and Redux and wrote unit and integration tests for new and
          existing code (Jest/Chai). Throughout my work, I leveraged many
          libraries such as InversifyJS (an IoC container) and mongoose, as well
          as tools like Docker and AWS (Lambda, SQS, and S3). I had the
          opportunity to learn in-depth how a CI/CD pipeline is constructed, and
          how services like AWS (ECS, CodePipeline, ECR), GitHub Actions, etc.
          can be used to do so.
        </Text>
      </WorkCard>

      <WorkCard
        position="Software Development Intern"
        employer="MedMe Health"
        location="Toronto, ON (Remote)"
        rating="Outstanding"
        date="Jan 2022 - Apr 2022 "
      >
        <Text type="psmall">
          {" "}
          During my time at MedMe Health, I was able to grow my skills in
          full-stack web development and gain experience working in an agile
          workflow. The web applications I worked on enable pharmacists to
          provide clinical services at scale, serving over 2,297 pharmacies
          across 10 provinces and territories in Canada. In 2021, they aided in
          administering 544,302 flu shots, 2,219,143 COVID vaccine doses, and
          155,355 COVID tests.
          <LineBreak />
          I implemented a variety of shipped front-end features including new
          patient intakes and pharmacist modules. While developing, I had the
          opportunity to use a variety of technologies and tools including
          React.js, TypeScript, PostgreSQL, Apollo GraphQL, Redux, and Jest. I
          also completed bug fixes in a back-end monolithic architecture using
          Java and the Spring framework. I was an initial driver in the unit
          testing of new React components. Aside from working on my own tickets
          I frequently code-reviewed front-end pull requests from other
          developers.
          <LineBreak />I strive to look for ways to improve existing systems.
          While at MedMe, I made a tool to expedite the process of mapping PDFs
          holding patient information stored in databases. The tool that I
          designed and programmed increased team efficiency and outsourced work
          to non-developers.
        </Text>
      </WorkCard>
    </SWork>
  );
};

export default Work;

const SWork = styled.div`
  > * {
    margin-bottom: 2rem;
  }
`;
