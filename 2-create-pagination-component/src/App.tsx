import Pagination from 'Pagination';
import logo from './logo.svg';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="App-link">
        <Pagination currentPageIndex={3} totalPosts={70} />
      </div>
    </header>
  </div>
);

export default App;
