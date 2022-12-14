import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar.js';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
    <NavBar />
    <Routes>
      <Route exact path='/' element={<ItemListContainer src="Hola, Buenos dias!" />} ></Route>
      <Route exact path='/ItemDetailContainer/' element={<ItemDetailContainer/>} ></Route>
      <Route exact path='/ItemDetailContainer/:id' element={<ItemDetailContainer/>} ></Route>
    </Routes>
   </BrowserRouter>
  );
};

export default App;
