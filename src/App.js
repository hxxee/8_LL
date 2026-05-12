import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import GlobalStyle from "./pages/GlobalStyles";
import Main from "./pages/Main";
import DWU from "./pages/DWU";
import KMU from "./pages/KMU";
import data from "./data.json";

function App() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(data);
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main dataList={dataList} />} />
        <Route path="/dwu/:Id" element={<DWU dataList={dataList} />} />
        <Route path="/kmu/:Id" element={<KMU dataList={dataList} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
