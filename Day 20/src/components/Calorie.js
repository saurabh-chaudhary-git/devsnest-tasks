import { useState } from "react";
import "../styles/Calorie.css";
const Calorie = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      itemName: "Pizza",
      calorie: 56,
      key: 1
    },
    {
      id: 2,
      itemName: "Burger",
      calorie: 67
    },
    {
      id: 3,
      itemName: "Coke",
      calorie: 500
    },
    {
      id: 4,
      itemName: "Brownie",
      calorie: 67
    },
    {
      id: 5,
      itemName: "Fried Rice",
      calorie: 90
    },
    {
      id: 6,
      itemName: "Lasagna",
      calorie: 200
    },
    {
      id: 7,
      itemName: "Pani Puri",
      calorie: 10
    }
  ]);
  const deleteItem = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };
  return (
    <div>
      {items.map((item) => {
        return (
          <div className="calorieCard" key={item.id}>
            <div>{item.itemName}</div>
            <div>you have consumed {item.calorie} cals today</div>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Calorie;
