function PostItem({post}) {
    return (
        <li>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
        </li>
    );
}

export default PostItem;