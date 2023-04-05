import React from 'react';
import rehypeParse from 'rehype-parse';
import rehypeReact from 'rehype-react';
import { unified } from 'unified';
import CustomLink from '@/components/CustomLink';
import type { Options } from 'rehype-react';

export const convertHtmlToReactElement = (html: string): React.ReactElement => {
  const processedContent = unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeReact, {
      createElement: React.createElement,
      components: {
        a: CustomLink,
      },
      // type inference of components property doesn't work as I expected, so it needs type assertion as workaround.
    } as Options)
    .processSync(html);

  return processedContent.result;
};
