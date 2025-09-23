import { Link } from "react-router-dom";
import { useBoard } from "./BoardContext";
import PostItem from "./PostItem";

function PostList() {
  const { state } = useBoard();
  const { posts } = state;

  return (
    <div>
      <h3>글 목록</h3>
      <Link to="/board/write"><button>글 작성</button></Link>
      <ul>
        {posts.length === 0 ? (
          <p>등록된 글이 없습니다.</p>
        ) : (
          posts.map(post => <PostItem key={post.id} post={post} />)
        )}
      </ul>
    </div>
  );
}

export default PostList;
