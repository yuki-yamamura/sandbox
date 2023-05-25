import React from 'react';

type Props = { name: string | undefined };

const Greeting = React.memo(({ name }: Props) => {
  if (name === undefined || name === '') return <div />;

  return <div>Hello, {name}!</div>;
});

export default Greeting;
