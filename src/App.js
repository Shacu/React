import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar.js';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js';

function App() {
  return (
   <div>
    <NavBar />
    <ItemListContainer src="Hola, Buenos dias!" />
   </div>
  );
}

export default App;
