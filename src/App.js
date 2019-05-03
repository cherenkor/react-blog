import React from 'react';
import AHeader from "./components/layout/AHeader/AHeader";
import AContent from "./components/layout/AContent/AContent";
import ASidebar from "./components/layout/ASidebar/ASidebar";
import AFooter from "./components/layout/AFooter/AFooter";

import './App.css';
import './styles/responsive.css';

function App() {
  return (
    <div>
      <AHeader />
      <div className="main">
        <AContent />
        <ASidebar />
      </div>
      <AFooter />
    </div>
  );
}

export default App;
