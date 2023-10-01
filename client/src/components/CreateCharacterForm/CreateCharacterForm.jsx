import { useState } from "react";
import handleChange from "../../utils/handleChange.js";
import axios from "axios";

const CreateCharacterForm = () => {
  const [newCharacter, setNewCharacter] = useState({
    name: "",
    description: "",
    urlImage: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/characters", {
        name: newCharacter.name,
        description: newCharacter.description,
        image: newCharacter.urlImage,
        userId: localStorage.getItem("userId"),
      });

      setNewCharacter({
        name: "",
        description: "",
        urlImage: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={newCharacter.name}
          onChange={(e) => handleChange(e, setNewCharacter, newCharacter)}
        />

        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={newCharacter.description}
          onChange={(e) => handleChange(e, setNewCharacter, newCharacter)}
        />

        <label>URL image:</label>
        <input
          type="text"
          name="urlImage"
          value={newCharacter.urlImage}
          onChange={(e) => handleChange(e, setNewCharacter, newCharacter)}
        />

        <button>Create!</button>
      </form>
    </div>
  );
};

export default CreateCharacterForm;
