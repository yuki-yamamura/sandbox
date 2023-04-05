import rehypeParse from 'rehype-parse';
import rehypeStringify from 'rehype-stringify';
import { unified } from 'unified';
import { rehypeImageSize } from './rehype';

export const getPost = () => {
  // a dummy HTML document including some links and images
  // in a real world application, it is supposed to be generated automatically.
  const text = `<h1>Hello, world!</h1>
<p>Welcome to my page 👀</p>
<p><a href="https://example.com">external link</a></p>
<p><a href="/posts/hello-world">internal link</a></p>
<p><img src="https://picsum.photos/200/300" alt="" /></p>
<p><img src="/public/crab.jpeg" alt="crab" /></p>
`;

  const processedContent = unified()
    .use(rehypeParse)
    .use(rehypeImageSize)
    .use(rehypeStringify)
    .processSync(text);

  return processedContent.toString();
};
