import './App.css'
import { Link, Routes, Route } from "react-router-dom";


import ChapterApp from './chapter/ChapterApp';
import BoardApp from './boardApp/BoardApp';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">홈</Link> |{" "}
        <Link to="/board">게시판</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<ChapterApp />}
        />
        <Route path="/board" element={<BoardApp />} />
      </Routes>
    </div>
  );
}

export default App;
