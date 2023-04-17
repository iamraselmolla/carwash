import logo from './logo.svg';
import './App.css';
import Banner from './componenets/Banner';
import Ourservices from './componenets/Ourservices';
import Plans from './componenets/Plans';
import Footer from './componenets/Footer';
import Menu from './componenets/Menu';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
     <Banner></Banner>
     <Ourservices></Ourservices>
     <Plans></Plans>
     <Footer></Footer>
    </div>
  );
}

export default App;
