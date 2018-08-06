import React from 'react';

const Card = ({name, email, id, username}) => 
    <div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img src = {`https://robohash.org/${id}?size=200x200`} alt = 'robot' />
        <div className = 'robotInfoContainer'>
            <h2>{name}</h2>
            <h3>{username}</h3>
            <h3>{email}</h3>
        </div>
    </div>

export default Card;