import { Badge } from "@chakra-ui/react";

type HelloWorldProps = {
  who?: string;
};

const HelloWorld = ({ who }: HelloWorldProps) => {
  return (
    <Badge fontSize="3em" colorScheme="green">
      Hello, {who ?? "World"}!
    </Badge>
  );
};

export default HelloWorld;
