import PostItem from "./PostItem";

function PostList({posts}) {
    if(posts.length === 0) return <p>글이 없습니다.</p>;

    return (
        <ul>
            {posts.map((post) => (
                <PostItem key={post.id} post={post} />
            ))}
        </ul>
    );
}

export default PostList;