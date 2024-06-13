import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBus from './components/AddBus';
import SearchBus from './components/SearchBus';
import ViewBus from './components/ViewBus';

function App() {
  return (
    <div>
      <AddBus/>
      <SearchBus/>
      <ViewBus/>
    </div>
  );
}

export default App;
