import { useState } from 'react';
import Greeting from './components/Greeting';

const App = () => {
  const [theme, setTheme] = useState<'red' | 'blue'>('red');
  const [name, setName] = useState<string>();
  const nextBackgroundColor = theme === 'red' ? 'blue' : 'red';

  return (
    <main className={`h-screen bg-${theme}-400`}>
      <label htmlFor="theme-button">
        {`Next background color is ${nextBackgroundColor}: `}
        <button
          id="theme-button"
          type="button"
          onClick={() => setTheme(nextBackgroundColor)}
          className="bg-slate-200"
        >
          Change theme
        </button>
      </label>
      <label htmlFor="name-textbox" className="block">
        Name:{' '}
        <input
          id="name-textbox"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <Greeting name={name} />
    </main>
  );
};

export default App;
