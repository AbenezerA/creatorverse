import { React, useState, useEffect } from 'react';
import Creator from "../components/Creator";
import { supabase } from '../client';

const ShowCreators = () => {
    const [creators, setCreators] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const {data} = await supabase
            .from('creators')
            .select()
            .order("created_at", {ascending: true})
            
            setCreators(data);
        }

        fetchData();
    }, []);

    return(
        <div className="creators-cont">
            {
            creators && creators.length > 0 ?
                creators.map((creator, index) => 
                    <Creator key={index} id={creator.id} name={creator.name} desc={creator.description} imageURL={creator.imageURL} twitterURL={creator.twitterURL} youtubeURL={creator.youtubeURL} instagramURL={creator.instagramURL}></Creator>
                )
            : <h2>No creators yet!😞</h2>

            } 
        </div>
    )
}

export default ShowCreators;