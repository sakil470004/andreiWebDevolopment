import React from 'react';
import './Card.css';

const Card = (props) => {

    return (
            // it is a full card
        <div className='background-div'>
        {/* add photo from web and fix it size */}
            <img src={`https://robohash.org/${props.id}?200*200`} alt='robots' />
            <div>
                <h2 >{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>

    );


}
export default Card;