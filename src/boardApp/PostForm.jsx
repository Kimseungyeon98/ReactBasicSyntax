import {useState} from "react";

function PostForm({onAdd}){
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title || !content) return;
        onAdd({id: Date.now(), title, content});
        setTitle("");
        setContent("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="제목" />
            <br />
            <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="내용" />
            <br />
            <button type="submit">글 추가</button>
        </form>
    );
}

export default PostForm;