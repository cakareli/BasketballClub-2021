
import React, { createContext, useContext } from 'react';
import LoginForm from './components/LoginForm'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import ErrorPage from './components/utils/ErrorPage';
import HomePage from './components/commons/HomePage';


function App() {

  const accessToken = localStorage.getItem("accessToken")
  console.log("LocalStorage accessToken: "+accessToken)

  return (
      <Router>
        <Routes>
          <Route path='/login' element={<LoginForm/>}></Route>
          <Route path='/' element={ accessToken == null ? <Navigate to="/login"/> : <HomePage/>}></Route>
          <Route path="*" element={<ErrorPage/>}></Route>
        </Routes>
      </Router>
  );
}
export const AuthContext = createContext({})
export default App;



