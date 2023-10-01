import { useState } from "react";
import handleChange from "../../utils/handleChange.js";

const CreateCharacterForm = () => {
  const [newCharacter, setNewCharacter] = useState({
    name: "",
    description: "",
    urlImage: "",
  });

  return (
    <div>
      <form>
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
