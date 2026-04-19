import { useState } from "react";
import Header from "./components/Header";
import SectionTitle from "./components/SectionTitle";
import Banner from "./components/Banner";
import AnimeList from "./components/AnimeList";
import { animeData } from "./data/animeData";

function App() {
  const [selectedAnime, setSelectedAnime] = useState(animeData[0]);
  const animeList = animeData.filter((item) => item.id !== selectedAnime?.id);

  return (
    <div className="bg-[rgba(25,32,38,1)] h-full min-h-screen">
      <div className="w-[1174px] mx-auto py-6">
        <Header />
        <SectionTitle />
        <Banner anime={selectedAnime} />
        <AnimeList anime={animeList} onSelect={setSelectedAnime} activeAnimeId={selectedAnime?.id} />
      </div>
    </div>
  );
}

export default App;
