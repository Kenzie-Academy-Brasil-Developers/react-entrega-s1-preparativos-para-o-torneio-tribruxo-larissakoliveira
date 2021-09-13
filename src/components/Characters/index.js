import CardsCharacters from '../CardsCharacters'
import { useEffect, useState } from 'react'
import Desktop1 from '../Desktop1'

const Characters = ({ characters }) => {

    const [show, setShow] = useState(true)
    const [threeCharacters, setThreeCharacters] = useState([])

    useEffect(() => {
        fetch('http://hp-api.herokuapp.com/api/characters/students')
            .then((response) => response.json())
            .then((response) => setThreeCharacters(response))
            .catch((err) => console.log(err))
    }, [])

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const randomCharacters = () => {
        let filteredCharacters = characters
        const threeCharacters = []

        for (let index = 0; index < 3; index++) {
            const randomStudent = filteredCharacters[getRandomIntInclusive(1, filteredCharacters.length - 1)]
            threeCharacters.push(randomStudent)
            filteredCharacters = filteredCharacters.filter((character) => character.house !== randomStudent.house)
        }
        setThreeCharacters(threeCharacters)
    }

    const showDesktop2 = () => {
        setShow(!show)
    }

    const onClickShowCharacters = () => {
        showDesktop2() 
        randomCharacters()
    }

    return (
        show ?
        <div>
            <Desktop1 onClickShowCharacters={onClickShowCharacters}/>
        </div>
        :
        <div className='containerCharacters'>
            <div className='card'>{threeCharacters.map((item) => (<CardsCharacters image={item.image} house={item.house} name={item.name} />))}</div>
            <button onClick={randomCharacters}>Tentar novamente</button>
        </div>

    )
}

export default Characters