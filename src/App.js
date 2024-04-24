import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeView from './views/HomeView';

const App = () => {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={HomeView}></Route>
    </Routes>
  </BrowserRouter>
}

export default App;
