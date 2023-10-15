import { AwesomeMarkdownElement } from "@awesome-elements/markdown";

// for directly using web component
declare global {
  namespace preact {
    namespace JSX {
      interface IntrinsicElements {
        "awesome-markdown": Partial<
          AwesomeMarkdownElement & {
            onmarkdownParsed: (event: CustomEvent) => void;
          }
        >;
      }
    }
  }
}
