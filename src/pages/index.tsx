import { forwardRef, useRef, useState } from 'react';

const Textbox = forwardRef<
  HTMLInputElement,
  { text: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }
>(function Child({ text, onChange }, ref) {
  return <input type="text" onChange={onChange} value={text} ref={ref} />;
});

const InputForm = () => {
  const initialText = '';
  const [text, setText] = useState(initialText);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert(text);
    setText(initialText);
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Textbox text={text} onChange={handleChange} ref={inputRef} />
      {/*                                          ^^^^ 子コンポーネントに ref を渡す */}
      <button type="submit">Submit</button>
    </form>
  );
};

const Page = () => {
  return <InputForm />;
};

export default Page;
