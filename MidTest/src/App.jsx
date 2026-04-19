import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./Header";
import Banner from "./Banner";
import AnimeList from "./AnimeList";

function App() {
  return (
    <div id="page">
      <Header />
      <Banner />
      <AnimeList />
    </div>
  );
}

export default App;
