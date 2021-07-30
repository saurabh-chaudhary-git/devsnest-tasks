const TrackerItem = ({ item, handleDelete, handleEdit, handleEditText }) => {
  return (
    <div>
      <h1>{item.item}</h1>
      <h2>{item.calorie}</h2>
      <input type="text" onChange={(e) => handleEditText(item.id)} />
      <button onClick={() => handleDelete(item.id)}>Delete</button>
      <button onClick={() => handleEdit(item.id)}>Edit</button>
    </div>
  );
};
export default TrackerItem;
