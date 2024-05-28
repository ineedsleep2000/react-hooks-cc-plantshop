import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => {
        setPlants(data);
      });
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredList = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (deletePlantId) =>
    setPlants(plants.filter((plant) => plant.id !== deletePlantId));

  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants} />
      <Search search={search} onSearch={handleSearch} />
      <PlantList
        plants={plants}
        filteredList={filteredList}
        onDelete={handleDelete}
      />
    </main>
  );
}

export default PlantPage;
