import React from 'react'
import "../App.css"
function Content(props) {
    return (
        <>
            <img className='artist-icon' src={props.image} alt={props.alt} />
            <div className="about-artist">
                <h2 className='name'>{props.name}</h2>
                <p>{props.about}</p>
                <span className='time'>{props.date}</span>
                <div className="venue">{props.venue}</div>
            </div>
        </>
    )
}

export default Content