import {  Routes, Route } from "react-router";
import Home from "./pages/home";
import Tickets from "./pages/tickets";
import Session from "./pages/session";
import Checkout from "./pages/checkout";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/tickets' element={<Tickets/>}/>
      <Route path='/speakers' element={<Session/>}/>
      <Route path='/checkout/' element={<Checkout/>}/>
    </Routes>
  )
}

export default App