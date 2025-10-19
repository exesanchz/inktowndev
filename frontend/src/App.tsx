import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArtistList from "./pages/ArtistList";
import ArtistDetail from "./pages/ArtistDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ArtistList />} />
        <Route path="/artist/:id" element={<ArtistDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
