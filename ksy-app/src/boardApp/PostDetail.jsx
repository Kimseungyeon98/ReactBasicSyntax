import { useParams, useNavigate, Link } from "react-router-dom";
import { useBoard } from "./BoardContext";

function PostDetail() {
  const { id } = useParams();
  const { state, dispatch } = useBoard();
  const navigate = useNavigate();

  const post = state.posts.find(p => p.id === Number(id));
  if (!post) return <p>글을 찾을 수 없습니다.</p>;

  const handleDelete = () => {
    dispatch({ type: "DELETE_POST", payload: post.id });
    navigate("/board");
  };

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <button onClick={handleDelete}>삭제</button>
      <Link to="/board"><button>목록</button></Link>
    </div>
  );
}

export default PostDetail;
