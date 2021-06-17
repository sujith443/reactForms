import React, { useState } from "react";

function App() {
  const name = "";
  const [naming, setNaming] = useState(name);
  const [newName, setNewName] = useState(naming);
  const changeEvent = (event) => {
    setNaming(event.target.value);
  };
  const uploadData = () => {
    setNewName(naming);
  };
  return (
    <div className="container">
      <h1>Hello {newName}</h1>
      <input
        type="text"
        placeholder="What's your name?"
        onChange={changeEvent}
      />
      <button onClick={uploadData}>Submit</button>
    </div>
  );
}

export default App;
