import { useState } from 'react'

const Desktop1 = ({onClickShowCharacters}) => {

    return (
        <>
            <h1>Torneio Tribruxo</h1>
            <p>Clique no botão para encontrar os feiticeiros!</p>
            <button onClick={onClickShowCharacters}>Começar!</button>
        </>
    )
}

export default Desktop1