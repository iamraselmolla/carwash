import logo from './logo.svg';
import './App.css';
import Banner from './componenets/Banner';
import Ourservices from './componenets/Ourservices';
import Plans from './componenets/Plans';

function App() {
  return (
    <div className="App">
     <Banner></Banner>
     <Ourservices></Ourservices>
     <Plans></Plans>
    </div>
  );
}

export default App;
