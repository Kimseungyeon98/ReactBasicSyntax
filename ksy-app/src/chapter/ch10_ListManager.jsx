import {useState} from "react";

// 자식 컴포넌트: 아이템 추가
function AddItem({onAdd}){
    const [input, setInput] = useState("");

    const handleAdd = () => {
        if (input.trim() === "") return;
        onAdd(input);
        setInput("");
    };

    return(
        <div>
            <input type="text" placeholder="새 아이템 입력" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={handleAdd}>추가</button>
        </div>
    );
}

// 자식 컴포넌트: 리스트 출력 및 삭제
function ItemList({items, onRemove}) {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {item}{" "}
                    <button onClick={() => onRemove(index)}>삭제</button>
                </li>
            ))}
        </ul>
    );
}

// 부모 컴포넌트: 상태 관리
function ListManager(){
    const [items, setItems] = useState([]);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const handleRemoveItem = (indexToRemove) => {
        setItems(items.filter((_,index) => index !== indexToRemove));
    };

    return (
        <div>
            <h3>리스트 관리 예제 (ch10)</h3>
            <AddItem onAdd={handleAddItem} />
            <ItemList items={items} onRemove={handleRemoveItem} />
            {items.length === 0 && <p>아이템이 없습니다.</p>}
        </div>
    );
}

export default ListManager;