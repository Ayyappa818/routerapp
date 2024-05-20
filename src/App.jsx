
import './App.css';
import { Link, Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <h1>APP</h1>
      <ul>
        <li><Link to="/enf">Enfield</Link></li>
        <li><Link to="/cou">Country</Link></li>
      </ul>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
