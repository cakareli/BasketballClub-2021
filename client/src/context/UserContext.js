import { createContext } from "react"

var currentUser = localStorage.getItem("currentUser")
var userObj;
  if(currentUser != null){
   
    userObj = JSON.parse(currentUser)
  
    console.log("AccessToken: "+userObj.accessToken)
    console.log("Role: "+userObj.role)
    console.log("Id: "+userObj.id)
  }else{
      userObj = null
  }


export const UserContext = createContext({userObj}) 