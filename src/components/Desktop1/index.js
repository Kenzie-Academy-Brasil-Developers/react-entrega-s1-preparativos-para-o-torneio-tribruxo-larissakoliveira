const Desktop1 = ({ startShowCharacters }) => {
  return (
    <>
      <h1>Torneio Tribruxo</h1>
      <p>Clique no botão para encontrar os feiticeiros!</p>
      <button onClick={startShowCharacters}>Começar!</button>
    </>
  );
};

export default Desktop1;
