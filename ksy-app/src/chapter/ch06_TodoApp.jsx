import {useState} from "react";

function TodoApp(){
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const addTodo = () => {
        if(input.trim() === "") return; //빈 값 방지
        /*

        ... -> 스프레드 연산자
        
        1.
        const arr = [1, 2, 3];
        const newArr = [...arr, 4]; // [1, 2, 3, 4]
        arr는 그대로 유지 / 새 배열 newArr에 기존 값 + 새로운 값 추가

        2.
        const user = { name: "Kim", age: 25 };
        const newUser = { ...user, age: 26 }; // { name: "Kim", age: 26 }
         기존 객체 user를 복사하고, age만 덮어씀

        */
        setTodos([...todos, input]);
        setInput("");
    };

    const removeTodo = (indexToRemove) => {
        setTodos(todos.filter((_, index) => index !== indexToRemove));
        /*

        _ -> 언더바
        사용하지 않는 변수를 나타낼 때 관습적으로 _ 사용
        
        1.
        예: 배열 filter 함수에서 값은 필요 없고 인덱스만 쓰고 싶을 때
        todos.filter((_, index) => index !== indexToRemove)
        여기서 _ = 해당 배열 요소 값 (사용 안 함)
        index = 배열 인덱스 (실제로 사용함)
        즉, _는 그냥 “이 값은 필요 없으니까 무시할게”라는 의미

        */
    };

    return (
        <div>
            <h3>Todo 리스트</h3>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="할 일 입력"/>
            <button onClick={addTodo}>추가</button>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => removeTodo(index)}>삭제</button>
                    </li>
                ))}
            </ul>

            {todos.length === 0 && <p>할 일이 없습니다.</p>}
        </div>
    );
}

export default TodoApp;