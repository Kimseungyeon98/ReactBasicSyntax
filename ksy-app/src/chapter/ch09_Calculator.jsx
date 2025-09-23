import {useState} from "react";

function TemperatureInput({label, value, onChange}){
    return (
        <div>
            <label>
                {label}:{" "}
                <input type="number" value={value} onChange={(e) => onChange(e.target.value)}/>
            </label>
        </div>
    );
}

function Calculator(){
    const [temperature, setTemperature] = useState(0);

    return (
        <div>
            <h3>State 끌어올리기 예제 (ch09)</h3>
            <TemperatureInput label="섭씨 (Celsius)" value={temperature} onChange={setTemperature} />
            <TemperatureInput label="화씨 (Fahrenheit)" value={temperature} onChange={setTemperature} />
            <p>현재 입력된 온도: {temperature}</p>
        </div>
    );
}

export default Calculator;