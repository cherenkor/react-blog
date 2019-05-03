import React from 'react';
import AHeader from "./components/sections/AHeader/AHeader";
import AContent from "./components/sections/AContent/AContent";
import ASidebar from "./components/sections/ASidebar/ASidebar";
import AFooter from "./components/sections/AFooter/AFooter";

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
