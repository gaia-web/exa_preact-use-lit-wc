import * as React from "react";
import { createComponent } from '@lit-labs/react';
import { AwesomeMarkdownElement } from "@awesome-elements/markdown";

export const Markdown = createComponent({
  tagName: 'awesome-markdown',
  elementClass: AwesomeMarkdownElement,
  react: React,
  events: {
    onMarkdownParsed: 'markdownParsed'
  },
});
