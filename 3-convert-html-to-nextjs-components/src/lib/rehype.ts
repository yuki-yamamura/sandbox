import path from 'path';
import imageSize from 'image-size';
import { visit } from 'unist-util-visit';
import { isInternalPath } from '@/common/utils';
import type { Root } from 'hast';
import type { Plugin } from 'unified';

export const rehypeImageSize: Plugin<void[], Root, Root> = () => (root) => {
  visit(root, 'element', (node) => {
    if (
      node.tagName === 'img' &&
      typeof node?.properties?.src === 'string' &&
      isInternalPath(node.properties.src)
    ) {
      const fullPath = path.join(process.cwd(), node.properties.src);
      const { height, width } = imageSize(fullPath);
      // src passed to Next.js Image component must begin with '/' and without 'public' directory.
      const src = node.properties.src.replace(/^\/public/, '');

      node.properties.height = height;
      node.properties.width = width;
      node.properties.src = src;
    }
  });
};
