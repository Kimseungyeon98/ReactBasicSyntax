import { useState } from "react"

function InputExample() {
    const [name, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value); // 입력값을 state에 저장
    };

    return (
        <div>
            <input type="text" placeholder="이름을 입력하세요" value={name} onChange={handleChange}/>
            <p>입력한 값: {name}</p>
        </div>
    );
}

export default InputExample;



/*
const [count, setCount] = useState(0);   // 숫자
const [text, setText] = useState("");    // 문자열
const [flag, setFlag] = useState(true);  // boolean
const [list, setList] = useState([]);    // 배열
const [user, setUser] = useState({ name: "", age: 0 }); //객체
*/