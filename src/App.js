import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeView from "./views/HomeView";
import Site from "./components/Site";
import PageDetail from "./page/siteDetail";

import lenis from "./utils/lenis";
import link from "./utils/link";

const App = () => {
  useEffect(() => {
    lenis();
    link();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/site" element={<Site />} />
        <Route path="/page-detail/:id" element={<PageDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
