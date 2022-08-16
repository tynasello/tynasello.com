import Button from "../common/Button";
import Text from "../common/Text";

interface Props {
  name: string;
}

const SkillTag = ({ name }: Props) => {
  return (
    <Button type="skill">
      <Text type="psmall" isLight>
        {name}
      </Text>
    </Button>
  );
};

export default SkillTag;
