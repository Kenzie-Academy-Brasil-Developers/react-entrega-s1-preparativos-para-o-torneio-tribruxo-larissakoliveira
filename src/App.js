import "./App.css";
import { useState, useEffect } from "react";
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setCharacters(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <Characters characters={characters} />
      </div>
    </div>
  );
}

export default App;
