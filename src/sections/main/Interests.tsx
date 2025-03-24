import styled from "styled-components";
import Text from "../../components/Text";
import Button from "../../components/Button";

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
    <SkillsContainer>
      <Text type="h2">My Current Favourite Hobbies 🚶‍♂️</Text>
      <SkillsContent>
        {hobbies.map((hobby) => (
          <Button key={hobby} type="tag">
            <Text type="psmall" isLight>
              {hobby}
            </Text>
          </Button>
        ))}
      </SkillsContent>
    </SkillsContainer>
  );
};

export default Interests;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SkillsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;
