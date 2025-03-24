import styled from "styled-components";
import Text from "../../../components/Text";
import Tag from "./Tag";

const Interests = () => {
  const hobbies: string[] = [
    "Weightlifting / Calisthenics",
    "Running",
    "Playing Guitar",
    "Pickup Basketball",
    "Jiu-jitsu / MMA",
    "Enjoying Nature",
    "Boardgames",
    "Chess",
  ];

  return (
    <>
      <SkillsContainer>
        <Text type="h2">My Current Favourite Hobbies 🚶‍♂️</Text>
        <SkillsContent>
          {hobbies.map((hobby) => (
            <Tag name={hobby} />
          ))}
        </SkillsContent>
      </SkillsContainer>
    </>
  );
};

export default Interests;

const SkillsContainer = styled.div`
  margin-bottom: 2.5rem;
`;
const SkillsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0.8rem 0;
  > * {
    margin-right: 0.6rem;
    margin-bottom: 0.6rem;
  }
`;
// const ListContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex-wrap: wrap;
//   margin: 0.4rem 0.6rem;
// `;
