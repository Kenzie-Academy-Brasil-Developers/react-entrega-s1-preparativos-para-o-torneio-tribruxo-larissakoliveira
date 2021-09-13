import './styles.css'

const CardsCharacters = ({ image, name, house }) => {

    return (
        <>
            <div className='containerCharacters'>
                <img src={image} alt='' />
                <h3>{name}</h3>
                <h3>{house}</h3>
            </div>
        </>
    )

}

export default CardsCharacters