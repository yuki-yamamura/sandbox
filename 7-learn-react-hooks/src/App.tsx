import Todos from 'todos';
import { TodosProvider } from 'todos/context';

const App = () => (
  <TodosProvider>
    <Todos />
  </TodosProvider>
);

export default App;
