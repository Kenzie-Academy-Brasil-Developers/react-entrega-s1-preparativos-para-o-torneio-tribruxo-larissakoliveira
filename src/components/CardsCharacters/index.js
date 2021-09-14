import "./styles.css";

const CardsCharacters = ({ image, name, house, id }) => {
  return (
    <>
      <div id={`id${id}`} className="containerCharacters">
        <img src={image} alt="" />
        <h3 id={`name${id}`} >{name}</h3>
        <h3 className="house">{house}</h3>
      </div>
    </>
  );
};

export default CardsCharacters;
