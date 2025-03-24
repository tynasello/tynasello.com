import Button from "../../../components/Button";
import Text from "../../../components/Text";

interface Props {
  name: string;
}

const Tag = ({ name }: Props) => {
  return (
    <Button type="tag">
      <Text type="psmall" isLight>
        {name}
      </Text>
    </Button>
  );
};

export default Tag;
