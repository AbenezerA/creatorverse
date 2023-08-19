import { React, useEffect, useState } from 'react'

const Creator = (props) => {
    return(
        <div className='creator-card' style={{backgroundImage: `url(${props.imageURL})`}}>
            <article className='creator-card-sub'>
                <h3 className='creator-card-name'>{props.name}</h3>
                <a className='creator-card-link' href={props.youtubeURL}>YouTube</a>
                <a className='creator-card-link' href={props.twitterURL}>Twitter</a>
                <a className='creator-card-link' href={props.instagramURL}>Instagram</a>
                <div className='creator-card-desc-cont'>
                    <p className='creator-card-desc'>{props.desc}</p>
                </div>
            </article>
        </div>
    )
}

export default Creator;