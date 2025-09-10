import React, {useState} from "react";

// 자식 컴포넌트
const Child = ({value}) => {
    console.log("child 컴포넌트 렌더링:", value);
    return <p>자식 값: {value}</p>;
};

// React.memo로 감싸기
const MemoizedChild = React.memo(Child);

// 부모 컴포넌트
function OptimizationExample() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    return (
        <div>
            <h3>ch15: 성능 최적화 - React.memo</h3>
            <button onClick={() => setCount(count + 1)}>카운트 증가</button>
            <p>count: {count}</p>

            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="텍스트 입력"/>

            <h4>Child (일반)</h4>
            <Child value={count} />
            <Child value={text} />

            <h4>MemoizedChild (React.memo)</h4>
            <MemoizedChild value={count} />
            <MemoizedChild value={text} />
        </div>
    );
}

export default OptimizationExample;