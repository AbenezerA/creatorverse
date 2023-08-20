import { React, useState, useEffect } from 'react';
import { Outlet, Link, useParams } from "react-router-dom";
import { supabase } from '../client';

const ViewCreator = () => {
    const {id} = useParams();
    const defaultCreator = {
        id: "-1",
        name: "FirstName LastName",
        imageURL: "#",
        description: "This creator doesn't exist! Click on \'Add A Creator\' to create a creator!"
    }
    const [creator, setCreator] = useState(defaultCreator);

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await supabase
            .from('creators')
            .select()
            .eq("id", id)
            
            console.log(data);
            if (data[0]) {
              setCreator(data[0]);  
            }         
        }
        fetchData();
    }, []);

    return(
        <div className="view-creator">
            <div className="view-creator-image">
                <img src={creator.imageURL} alt={creator.name}></img>
            </div>
            <div className='view-creator-desc'>
                <h2 className='creator-card-name'>{creator.name}</h2>
                <p>{creator.description}</p>
                {creator.youtubeURL ? <button className='creator-link-btn'><span className='fa fa-youtube-play'></span> @{creator.youtubeURL}</button> : null}
                {creator.twitterURL ? <button className='creator-link-btn'><span className='fa fa-twitter'></span> @{creator.twitterURL}</button> : null}
                {creator.instagramURL ? <button className='creator-link-btn'><span className='fa fa-instagram'></span> @{creator.instagramURL}</button> : null}
            </div>
            <div className='view-creator-btns flex-cont-row'>
                <Link to={`/edit/${creator.id}`}><button className='layout-btn'>EDIT</button></Link>
                <button className='layout-btn delete-btn'>DELETE</button>
            </div> 
        </div>
    )
}

export default ViewCreator;