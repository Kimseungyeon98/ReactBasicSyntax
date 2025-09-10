import { useState } from "react";

function Counter(){
    // count: 상태값
    // setCount: 상태를 변경하는 함수
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>현재 카운트: {count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
        </div>
    );
}

export default Counter;