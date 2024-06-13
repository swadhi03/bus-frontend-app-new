import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBus from './components/AddBus';
import SearchBus from './components/SearchBus';

function App() {
  return (
    <div>
      <AddBus/>
      <SearchBus/>
    </div>
  );
}

export default App;
