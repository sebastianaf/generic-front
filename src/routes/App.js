import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import Dashboart from "../pages/Dashboart";
import Page404 from "../pages/Page404";
import Modal from "../components/Modal";
import Practice from "../pages/Practice";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/dashboard" element={<Dashboart/>} />
      <Route exact path="/modal" element={<Modal/>} />
      <Route exact path="/practice" element={<Practice/>} />
      <Route path="*" element={<Page404/>} />
    </Routes>
  </BrowserRouter>
);

export default App;
