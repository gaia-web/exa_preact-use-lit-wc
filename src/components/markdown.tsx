import * as React from "preact/compat";
import { createComponent } from '@lit-labs/react';
import { AwesomeMarkdownElement } from "@awesome-elements/markdown";

export const Markdown = createComponent({
  tagName: 'awesome-markdown',
  elementClass: AwesomeMarkdownElement,
  react: React as any,
  events: {
    onMarkdownParsed: 'markdownParsed'
  },
}) as React.FunctionComponent<Partial<AwesomeMarkdownElement & { onMarkdownParsed: (event: CustomEvent) => void }>>;
// temp fix for types, waiting for GitHub issue to be resolved
