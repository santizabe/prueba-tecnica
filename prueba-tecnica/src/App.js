import React from "react";
import { Route, Routes } from 'react-router-dom';
import ReserveForm from "./Pages/Reserve/ReserveForm";
import Search from "./Pages/Search/Search";
import FlightsList from "./Pages/FlightsList/FlightsList";


function App() {
  return (<>
    <Routes>
      <Route path='/' exact={true} element={<Search/>}/>
      <Route path="/Checkout" element={<ReserveForm/>}/> 
      <Route path="/Flights" element={<FlightsList/>}/>
    </Routes>
  </>
  );
}

export default App;
