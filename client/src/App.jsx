import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import HomeView from "./views/HomeView";
import CardsView from "./views/CardsView";
import Nav from "./components/Nav/Nav";
import CreateCharacter from "./views/CreateCharacter";
function App() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname != "/" && <Nav />}
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/characters" element={<CardsView />} />
        <Route path="/create-character" element={<CreateCharacter />}/>
      </Routes>
    </>
  );
}

export default App;
