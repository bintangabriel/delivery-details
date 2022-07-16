import React from 'react'
import { GameBoxStyle } from './styled'


const GameBox = ({ jenis, harga, _id }) => {
    return (
        <GameBoxStyle>
            <div className="box-outside">
                <div className="box-inside">
                    <h4>{jenis}</h4>
                    <h5>{harga}</h5>
                </div>
            </div>
        </GameBoxStyle>
    )
}

export default GameBox