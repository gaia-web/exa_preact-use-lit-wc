import { Badge } from "@chakra-ui/react";
import "@awesome-elements/markdown";
import { Markdown } from "./markdown";

type HelloWorldProps = {
  who?: string;
};

const HelloWorld = ({ who }: HelloWorldProps) => {
  return (
    <>
      <Badge fontSize="3em" colorScheme="green">
        Hello, {who ?? "World"}!
      </Badge>
      <awesome-markdown markdown={`# H1\n## H2\n### H3\nDirectly use web component.`} onmarkdownParsed={(e) => console.log(e, 'no wrapping')}></awesome-markdown>
      <Markdown markdown={`# H1\n## H2\n### H3\nUse React wrapper.`} onMarkdownParsed={(e) => console.log(e, 'wrapped')}></Markdown>
    </>
  );
};

export default HelloWorld;
