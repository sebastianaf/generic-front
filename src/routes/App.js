import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import Dashboart from "../pages/Dashboart";
import Page404 from "../pages/Page404";
import Practice from "../pages/Practice";
import DefaultLayout from "../components/DefaultLayout";

const App = () => (
  <BrowserRouter>
    <DefaultLayout>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboart />} />
        <Route exact path="/practice" element={<Practice />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </DefaultLayout>
  </BrowserRouter>
);

export default App;
