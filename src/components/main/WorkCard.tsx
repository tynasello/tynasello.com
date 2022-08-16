import { ReactNode } from "react";
import styled from "styled-components";
import Text from "../common/Text";

interface Props {
  position: string;
  employer: string;
  location: string;
  date: string;
  rating?: string;
  children?: ReactNode;
}

const WorkCard = ({
  position,
  employer,
  location,
  date,
  rating,
  children,
}: Props) => {
  return (
    <>
      <SWorkCard>
        <Text type="h2">
          {position} <span style={{ fontWeight: "100" }}>@ {employer}</span>
        </Text>

        <Text type="psmall" isLight style={{ paddingBottom: "1rem" }}>
          {location}{" "}
          <span style={{ paddingLeft: "1rem", fontSize: "11px" }}>{date}</span>
        </Text>
        {rating && (
          <Text type="psmall" isLight style={{ marginBottom: ".5rem" }}>
            Employer Evaluation:{" "}
            <Text type="psmall" isBold>
              {rating}
            </Text>
          </Text>
        )}
        {children && children}
      </SWorkCard>
    </>
  );
};

export default WorkCard;

const SWorkCard = styled.div`
  display: flex;
  flex-direction: column;
`;
