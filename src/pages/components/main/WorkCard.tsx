import { ReactNode } from "react";
import styled from "styled-components";
import LineBreak from "../../../components/LineBreak";
import Text from "../../../components/Text";

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

        <Text type="psmall" isLight>
          {location}{" "}
          <span style={{ paddingLeft: "1rem", fontSize: "11px" }}>{date}</span>
        </Text>
        {rating && (
          <Text type="psmall" isLight>
            Employer Evaluation:{" "}
            <Text type="psmall" isBold>
              {rating}
            </Text>
          </Text>
        )}
        <LineBreak />
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
