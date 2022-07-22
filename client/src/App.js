
import React, { createContext, useContext } from 'react';
import LoginForm from './components/LoginForm'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import ErrorPage from './components/utils/ErrorPage';
import HomePage from './components/commons/HomePage';


function App() {

  const accessToken = localStorage.getItem("accessToken")
  const authObj = JSON.stringify(accessToken)
  console.log("LocalStorage accessToken: "+authObj)
  console.log("Context accessToken: "+accessToken)


  return (
    <AuthContext.Provider value={accessToken}>
      <Router>
        <Routes>
          <Route path='/login' element={<LoginForm/>}></Route>
          <Route path='/' element={ accessToken == "null" ? <Navigate to="/login"/> : <HomePage/>}></Route>
          <Route path="*" element={<ErrorPage/>}></Route>
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}
export const AuthContext = createContext({})
export default App;



