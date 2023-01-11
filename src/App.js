import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Authenticator';
import DataTable from './Components/DataTable';
import Home from './Components/Home';

export default function App(){
  return(
    <Router>
      <Routes>
        <Route path= "/login" element = {<Login/>}/>
        <Route path= "/table" element = {<DataTable/>}/>
        <Route path= "/" element = {<Home/>}/>
      </Routes>
    </Router>
  );
}