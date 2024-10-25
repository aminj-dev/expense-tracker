import './App.css';
import { Main } from './page/main/Main';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Chart } from "./page/chart/Chart";
import { GlobalProvider } from "./context/GlobalState"
import { Nav } from './component/Nav';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/chart' element={<Chart/>}/>
          <Route path='*' element={<div className='notFound'>Not Found</div>}/>
        </Routes>
      </Router>
    </GlobalProvider>
  )
}

export default App;
