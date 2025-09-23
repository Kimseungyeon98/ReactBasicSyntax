import {useState, useEffect} from "react";

function FetchExample(){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    // 컴포넌트 마운트 시 데이터 fetch
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
        .then((res) => res.json())
        .then((data) => {
            setPosts(data);
            setLoading(false);
        })
        .catch((err) => {
            console.log("데이터 가져오기 실패:", err);
            setLoading(false);
        });
    }, []); // 빈 배열: 마운트 시 1회 실행

    return (
        <div>
            <h3>API 호출 예제 (ch12)</h3>
            {loading ? (
                <p>데이터 로딩 중...</p>
            ) : (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <strong>{post.title}</strong>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default FetchExample;