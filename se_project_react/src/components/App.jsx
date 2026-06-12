import { useState } from "react";
import "../blocks/index.css";
import Header from "./Header";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <main />
      </div>
    </div>
  );
}

export default App;
