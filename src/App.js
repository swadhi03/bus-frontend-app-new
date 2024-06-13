import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBus from './components/AddBus';
import SearchBus from './components/SearchBus';
import ViewBus from './components/ViewBus';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddBus/>}/>
          <Route path='/search' element={<SearchBus/>}/>
          <Route path='/view' element={<ViewBus/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
