import Hello from "./ch01_Hello";
import Counter from "./ch02_Counter";
import InputExample from "./ch03_InputExample";
import TodoList from "./ch04_TodoList";
import Greeting from "./ch05_Greeting";
import TodoApp from "./ch06_TodoApp";
import SignupForm from './ch07_SignupForm';
import ParentChild from "./ch08_ParentChild";
import Calculator from './ch09_Calculator';
import ListManager from './ch10_ListManager';
import Timer from './ch11_Timer';
import FetchExample from './ch12_FetchExample';
import ContextExample from './ch13_UserContext';
import ReducerExample from './ch14_ReducerExample';
import OptimizationExample from './ch15_Optimization';

function ChapterApp(){
    return (
        <div>
            <Hello name="Kim"/>
            <Hello name="SeungYeon"/>

            <hr />
            <Counter />

            <hr />
            <InputExample />

            <hr />
            <TodoList />

            <hr />
            <Greeting isLoggedIn={true} />
            <Greeting isLoggedIn={false} />

            <hr />
            <TodoApp />

            <hr />
            <SignupForm />

            <hr />
            <ParentChild />

            <hr />
            <Calculator />

            <hr />
            <ListManager />

            <hr />
            <Timer />

            <hr />
            <FetchExample />

            <hr />
            <ContextExample />

            <hr />
            <ReducerExample />

            <hr />
            <OptimizationExample />
        </div>
    );
}

export default ChapterApp;