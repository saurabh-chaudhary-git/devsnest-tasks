import { useState } from "react";

const TrackerForm = ({ submit }) => {
  const [form, setForm] = useState({
    item: "",
    calorie: ""
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    submit({ ...form, id: new Date().getTime().toString() });
    console.log(submit);
  };
  const handleInput = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item"
        name="item"
        value={form.item}
        onChange={handleInput}
      />
      <input
        type="number"
        placeholder="Calorie"
        name="calorie"
        value={form.calorie}
        onChange={handleInput}
      />
      <button>Add Item</button>
    </form>
  );
};
export default TrackerForm;
