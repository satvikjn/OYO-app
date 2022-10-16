import './App.css';
import Cards from './Components/Cards/Cards';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';


function App() {
  return (
    <div className="App" style={{display : "flex"}}>
      <Sidebar/>
      <div className="body">
        <Navbar/>
        <Cards/>
      </div>
    </div>
  );
}

export default App;
