import Button from "../../../components/Button";
import Text from "../../../components/Text";

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
