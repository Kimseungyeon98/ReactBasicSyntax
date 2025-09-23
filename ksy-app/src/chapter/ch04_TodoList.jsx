function TodoList(){
    const todoList = ["React 배우기", "JS 복습", "Vite 설정"];

    return (
        <div>
            <h3>할 일 목록</h3>
            <ul>
                {todoList.map((todo,index) => (
                    <li key={index}>{todo}</li> // key는 필수
                ))}
            </ul>
        </div>
    );
}

export default TodoList;