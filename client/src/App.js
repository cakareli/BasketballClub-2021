
import React, {useState, useContext} from 'react';
import LoginForm from './components/LoginForm'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import ErrorPage from './components/utils/ErrorPage';
import HomePage from './components/commons/HomePage';
import { UserContext } from './context/UserContext';
function App() {

  const [value, setValue] = useState(useContext(UserContext))
  
  return (
    <UserContext.Provider value = {{value, setValue }}>
      <Router>
        <Routes>
            <Route path='/' element={ value == null ? <Navigate to="/login"/> : <HomePage/> }></Route>
            <Route path='/login' element={<LoginForm/>}></Route>
            <Route path="*" element={<ErrorPage/>}></Route>
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}
export default App;



