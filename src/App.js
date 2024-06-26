import React from "react"
import {BrowserRouter as Router,Routes,Route, Navigate} from "react-router-dom"
import {Login, SignUp, CreateEvent, Event, MyEvent} from "./pages/index.js"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login"/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/createEvent" element={<CreateEvent/>}></Route>
        <Route path="/event" element={<Event/>}></Route>
        <Route path="/myEvent" element={<MyEvent/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
