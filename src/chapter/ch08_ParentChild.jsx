/* 부모 -> 자식 (데이터 내려주기) */
function FirstChild({message}){
    return <p>자식이 받은 메시지: {message}</p>;
}

function FirstParent(){
    return (
        <div>
            <h3>부모 → 자식 예제</h3>
            <FirstChild message="안녕하세요, 자식 컴포넌트 !" />
        </div>
    );
}

/* 자식 -> 부모 (함수 내려주기) */
function SecondChild({onSend}){
    return (
        <div>
            <button onClick={() => onSend("안녕 부모야!")}>부모에게 메시지 보내기</button>
        </div>
    );
}

function SecondParent(){
    const handleMessage = (msg) => {
        alert("자식으로부터 받는 메시지: " + msg);
    };

    return (
        <div>
            <h3>자식 → 부모 예제</h3>
            <SecondChild onSend={handleMessage} />
        </div>
    );
}

function ParentChild(){
    return (
        <div>
            <FirstParent />
            <hr />
            <SecondParent />
        </div>
    );
}

export default ParentChild;