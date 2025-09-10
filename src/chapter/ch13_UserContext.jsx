import {createContext, useContext, useState} from "react";

// 1. Context 생성
const UserContext = createContext();

// 2. Context Provider 컴포넌트
function UserProvider({children}){
    const [user, setUser] = useState({name: "홍길동", age: 25});

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
}

// 3. UserProfile 컴포넌트: Context 값 사용
function UserProfile(){
    const {user} = useContext(UserContext);
    return (
        <div>
            <h3>사용자 정보</h3>
            <p>이름: {user.name}</p>
            <p>나이: {user.age}</p>
        </div>
    );
}

// 4. UserEditor 컴포넌트: Context 값 변경
function UserEditor(){
    const {setUser} = useContext(UserContext);
    return( 
        <button onClick={() => setUser({name: "임꺽정", age: 30})}>
            사용자 변경
        </button>
    );
}

// 5. 최종 예제 컴포넌트
function ContextExample(){
    return(
        <UserProvider>
            <div>
                <h2>ch13: userContext 예제</h2>
                <UserProfile />
                <UserEditor />
            </div>
        </UserProvider>
    );
}

export default ContextExample;