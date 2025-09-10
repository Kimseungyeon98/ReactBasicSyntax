import {useState, useEffect} from "react";

function Timer(){
    const [count, setCount] = useState(0);
    const [running, setRunning] = useState(false);

    // useEffect: 타이머 시작/중지
    useEffect(() => {
        let timerId;

        if(running){
            timerId = setInterval(() => {
                setCount(prev => prev + 1);
            }, 1000);
        }

        // cleanup: 언마운트 시 또는 running false 시 타이머 제거
        return () => {
            if (timerId) clearInterval(timerId);
        };
    }, [running]); // running이 바뀔 때마다 실행

    return (
        <div>
            <h3>타이머 예제 (ch11)</h3>
            <p>카운트: {count}</p>
            <button onClick={() => setRunning(true)}>시작</button>
            <button onClick={() => setRunning(false)}>정지</button>
            <button onClick={() => setCount(0)}>리셋</button>
        </div>
    )
}

export default Timer;