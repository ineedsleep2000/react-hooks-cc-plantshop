import { useState } from "react";

function PlantCard({ plant, onDelete }) {
  const { id, name, image, price } = plant;
  const [toggleInStock, setToggleInStock] = useState(true);

  const handleToggleInStock = () => {
    setToggleInStock(!toggleInStock);
  };

  const handleDelete = () => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => onDelete(id));
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button
        onClick={handleToggleInStock}
        className={toggleInStock ? "primary" : ""}
      >
        {toggleInStock ? "In Stock" : "Sold Out"}
      </button>
      <button onClick={handleDelete}> Delete</button>
    </li>
  );
}

export default PlantCard;
