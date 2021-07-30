import "./styles.css";
import { useState } from "react";
import TrackerFrom from "./components/TrackerForm";
import TrackerItem from "./components/TrackerItem";
export default function App() {
  const [items, setItem] = useState([]);
  const [itemEdit, setItemEdit] = useState(null);
  const [editText, setEditText] = useState("");

  const handleSubmit = (form) => {
    setItem([form, ...items]);
  };
  const handleDelete = (id) => {
    const remainItem = items.filter((item) => item.id !== id);
    setItem(remainItem);
  };
  const handleEdit = (id) => {
    const editedTodo = items.filter((item) => item.id !== id);
    setItem(editedTodo);
    if (items.id === id) {
      console.log("yo");
    }
  };
  const handleEditText = (id) => {};
  return (
    <div className="App">
      <TrackerFrom submit={handleSubmit} />
      {items.map((item) => (
        <TrackerItem
          item={item}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleEditText={handleEditText}
        />
      ))}
    </div>
  );
}
