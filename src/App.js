import logo from './logo.svg';

import './App.css';

import Mobileview from "./components/filter_component"

import React from 'react';


function App() {
  const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);
  
  return (
  
       <div className="container-fluid font-family " >
     {/* <Desktopview/>
     <Mobileview/> */}
     <div className="col-sm-12">
     <Mobileview/>
    {/* <Login/> */}
    

  
     </div>

    </div>
   
   
  );
}

export default App;
