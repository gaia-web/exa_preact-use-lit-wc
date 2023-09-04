import { Badge } from "@chakra-ui/react";
import "@awesome-elements/markdown";
import { AwesomeMarkdownElement } from "@awesome-elements/markdown";
import { Markdown } from "./markdown";

// for directly using web component
declare global {
  namespace preact {
    namespace JSX {
      interface IntrinsicElements {
        'awesome-markdown': Partial<AwesomeMarkdownElement & { onmarkdownParsed: (event: CustomEvent) => void }>
      }
    }
  }
}

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
