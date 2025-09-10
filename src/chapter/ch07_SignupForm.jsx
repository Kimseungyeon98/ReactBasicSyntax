import {useState} from "react";

function SignupForm(){
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value, // name 속성에 따라 동적으로 값 변경
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // 기본 새로고침 방지
        console.log("회원가입 데이터:" , form);
        alert(`회원가입 완료!\n이름: ${form.username}\n이메일: ${form.email}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>회원가입 폼</h3>
            
            <input type="text" name="username" placeholder="이름" value={form.username} onChange={handleChange}/>
            <br />

            <input type="email" name="email" placeholder="이메일" value={form.email} onChange={handleChange}/>
            <br />

            <input type="password" name="password" placeholder="비밀번호" value={form.password} onChange={handleChange}/>
            <br />

            <button type="submit">회원가입</button>
        </form>
    );
}

export default SignupForm;