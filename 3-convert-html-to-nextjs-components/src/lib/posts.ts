export const getPost = (): string => {
  // in a real world application, HTML like below code is supposed to be generated automatically.
  const text = `<h1>Hello, world!</h1>
<p>Welcome to my page 👀</p>
<p><a href="https://example.com">external link</a></p>
<p><a href="/posts/hello-world">internal link</a></p>
`;

  return text;
};
