import {useState} from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
    const [items, setItems] = useState(initialItems);

    function handleAddItems(item) {
        setItems((items) => [...items, item]);
    }

    function handleDeleteItem(id) {
        setItems((items)=>items.filter((item)=>item.id !== id));
    }

    function handleUpdateItem(id) {
        setItems((items) => items.map(item => item.id === id ? {...item, packed: !item.packed} : item))
    }

    function handleClearList() {
        const confirm = window.confirm('Are you sure you want to clear the list?');

        if(confirm) setItems([]);
    }

    return (
        <div className="app">
            <Logo />
            <Form onAddItems={handleAddItems} />
            <PackingList items={items} onDeleteItem={handleDeleteItem} onUpdateItem={handleUpdateItem} onClearList={handleClearList} />
            <Stats items={items} />
        </div>
    )
}








