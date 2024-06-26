import React from "react"
import {BrowserRouter as Router,Routes,Route, Navigate} from "react-router-dom"
import {Login} from "./pages/index.js"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login"/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* <Route path="/createEvent" element={<createEvent/>}></Route>
        <Route path="/event" element={<event/>}></Route>
        <Route path="/myEvent" element={<myEvent/>}></Route>
        <Route path="/signup" element={<signup/>}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
