import React from 'react';
import MemeImage from "../images/react-meme1_.png"
import "../styles/meme.css"

const memeCard = () => {
    return (
        <div className="card">
            <div><img src={MemeImage} alt="Meme"/> </div>
            <div>
                <h2>MemeWorld</h2>
                <p>Ahh, I see you are a man of culture as well</p></div>
        </div>
    )
}

export default memeCard
