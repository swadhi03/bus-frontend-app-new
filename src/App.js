import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBus from './components/AddBus';
import SearchBus from './components/SearchBus';
import ViewBus from './components/ViewBus';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/add' element={<AddBus />} />
          <Route path='/search' element={<SearchBus />} />
          <Route path='/view' element={<ViewBus />} />
          <Route path='/sigin' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
