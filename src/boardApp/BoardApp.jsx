import {useState} from "react";
import PostList from "./PostList";
import PostForm from "./PostForm";

function BoardApp() {
  const [posts, setPosts] = useState([]);

  // 새 글 추가
  const addPost = (post) => {
    setPosts([post, ...posts]); // 최신 글 맨 위
  };

  return (
    <div>
      <h2>간단 게시판</h2>
      <PostForm onAdd={addPost} />
      <PostList posts={posts} />
    </div>
  );
}

export default BoardApp;