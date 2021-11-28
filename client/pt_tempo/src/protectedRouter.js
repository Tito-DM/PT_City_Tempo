import React from "react";
import {Route, useNavigate } from "react-router-dom";
const ProtectedRoute = ({ element: Element,user,type, ...rest }) => {
 
  const navigation = useNavigate()
  return (
    <Route {...rest}  
    render={
      (props) =>{
        if(type==="logged"){ 
           return  user ?  <Element {...rest} {...props} />:  navigation(-1);
        }
           return !user ?  <Element {...rest} {...props} />:  navigation(-1); 
      }} 
    />
  );
};

export default ProtectedRoute;
