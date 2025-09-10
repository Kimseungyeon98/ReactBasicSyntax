import { useReducer } from "react";

// 1. reducer 함수 정의
function counterReducer(state, action){
    switch (action.type){
        case "increment":
        return {count: state.count + 1};
        
        case "decrement":
        return {count: state.count-1};
        
        case "reset":
        return {count: 0};
        
        default:
        return state;
    }
}

// 2. 컴포넌트 정의
function ReducerExample(){
    const [state, dispatch] = useReducer(counterReducer, {count: 0});

    return (
        <div>
            <h2>ch14: useReducer 예제</h2>
            <p>현재 값: {state.count}</p>
            <button onClick={() => dispatch({type: "increment"})}>+1</button>
            <button onClick={() => dispatch({type: "decrement"})}>-1</button>
            <button onClick={() => dispatch({type: "reset"})}>Reset</button>
        </div>
    )
}

export default ReducerExample;