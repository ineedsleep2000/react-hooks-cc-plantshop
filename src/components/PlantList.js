import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, filteredList, onDelete }) {
  const plantCards = filteredList.map((plant) => (
    <PlantCard key={plant.id} plant={plant} onDelete={onDelete} />
  ));
  return <ul className="cards">{plantCards}</ul>;
}

export default PlantList;
