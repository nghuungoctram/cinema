import logo from './logo.svg';
import './App.css';
import Menu from './Menu/Menu'
import Conten1 from './Content1/Conten1'
import Conten2 from './Conten2/Conten2'
import Conten3 from './Conten3/Conten3'
import Conten4 from './Conten4/Conten4'
import ContenBottom from "./ContenBottom/ContenBottom";
function App() {
  return (
    <div className="App">
      <Menu />
      <Conten1 />
      <Conten2 />
      < Conten3 />
      <Conten4 />
      <ContenBottom />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
