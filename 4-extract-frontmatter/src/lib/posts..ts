import remarkFrontmatter from 'remark-frontmatter';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { unified } from 'unified';
import { FrontMatter, isFrontMatter } from '@/types/FrontMatter';
import { remarkExtractFrontMatter } from './remark';

export const getFrontMatter = async (): Promise<FrontMatter> => {
  // a dummy HTML document including front matter
  // in a real world application, it is supposed to be generated automatically.
  const text = `---
title: Funny Title
description: some description 
tags:
  - Markdown
  - YAML
date: 2023-04-06
draft: false
lastMod: 2023-04-07
---

# GFM-Example

GitHub Flavored Markdown Example
`;

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkExtractFrontMatter)
    .use(remarkFrontmatter)
    .use(remarkStringify)
    .process(text);

  const frontMatter = processedContent.data.matter;
  if (!isFrontMatter(frontMatter)) {
    console.log({ frontMatter });
    throw new Error('Invalid Front Matter Found');
  }

  return frontMatter;
};
