import { Link } from "react-router-dom";

function PostItem({ post }) {
  return (
    <li>
      <Link to={`/board/${post.id}`}>
        <strong>{post.title}</strong>
      </Link>
      <p>{post.content}</p>
    </li>
  );
}

export default PostItem;
