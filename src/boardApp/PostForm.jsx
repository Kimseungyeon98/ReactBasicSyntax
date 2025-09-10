import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBoard } from "./BoardContext";

function PostForm() {
  const { dispatch } = useBoard();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      content,
    };
    dispatch({ type: "ADD_POST", payload: newPost });
    navigate("/board");
  };

  return (
    <div>
      <h3>글 작성</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <textarea
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <br />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}

export default PostForm;
