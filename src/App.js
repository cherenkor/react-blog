import React from 'react';
import Header from "./components/layout/Header/Header";
import Content from "./components/layout/Content/Content";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import Footer from "./components/layout/Footer/Footer";

import './App.css';
import './styles/responsive.css';

function App() {
  return (
    <div>
      <Header />
      <div className="main">
        <Content />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
