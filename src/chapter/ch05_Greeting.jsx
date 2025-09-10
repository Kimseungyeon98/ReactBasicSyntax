function Greeting({isLoggedIn}){
    return (
        <div>
            {isLoggedIn ? <h3>환영합니다!</h3> : <h3>로그인 해주세요.</h3>}
        </div>
    );
}

export default Greeting;