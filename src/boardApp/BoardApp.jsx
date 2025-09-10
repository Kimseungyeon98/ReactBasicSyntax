import { Routes, Route } from "react-router-dom";
import { BoardProvider } from "./BoardContext";
import PostList from "./PostList";
import PostForm from "./PostForm";
import PostDetail from "./PostDetail";

function BoardApp() {
  return (
    <BoardProvider>
      <Routes>
        <Route path="" element={<PostList />} />          {/* /board */}
        <Route path="write" element={<PostForm />} />     {/* /board/write */}
        <Route path=":id" element={<PostDetail />} />     {/* /board/:id */}
      </Routes>
    </BoardProvider>
  );
}

export default BoardApp;
