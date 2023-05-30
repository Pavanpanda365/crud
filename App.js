import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Api from './components/Api';
import Crud from './components/Crud';
import Update from './components/Update'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Api/>} /> */}
          <Route path='/' element={<Crud/>} />
          <Route path='/update/:userid' element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
