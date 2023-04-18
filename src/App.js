import logo from './logo.svg';
import './App.css';

import { RouterProvider } from 'react-router-dom';
import { router } from './componenets/router/router';
import Home from './componenets/home/Home';

function App() {
  return (
    <div className="App">

      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
