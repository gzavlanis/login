import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Authenticator';
import DataTable from './Components/DataTable';

export default function App(){
  return(
    <Router>
      <Routes>
        <Route path= "/table" element = {<DataTable/>}/>
        <Route path= "/" element = {<Login/>}/>
      </Routes>
    </Router>
  );
}