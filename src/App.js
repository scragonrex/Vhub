import './App.css';
import Component1 from './components/Component1/Component1';
import Component2 from './components/Component2/Component2';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Component1/>
    <Component2/>
    </div>
  );
}

export default App;
