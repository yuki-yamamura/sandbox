import yaml from 'yaml';
import type { Root } from 'remark-frontmatter';
import type { Plugin } from 'unified';

export const remarkExtractFrontMatter: Plugin<void[], Root, Root> =
  () => (root, file) => {
    for (const child of root.children) {
      if (child.type === 'yaml') {
        file.data.matter = yaml.parse(child.value);
        break;
      }
    }
  };
