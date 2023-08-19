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
            .order("created_at", {ascending: false})
            console.log("fetching...", data)
            setCreators(data);
        }

        fetchData();
    }, []);

    return(
        <div className="creators-cont">
            <h2>Here are all your favorite creators!</h2>
            <div className='creators-cont-sub'>
                {
                creators && creators.length > 0 ?
                    creators.map((creator, index) => 
                        <Creator key={index} id={creator.id} name={creator.name} desc={creator.description} imageURL={creator.imageURL} twitterURL={creator.twitterURL} youtubeURL={creator.youtubeURL} instagramURL={creator.instagramURL}></Creator>
                    )
                : null

                } 
            </div>
        </div>
    )
}

export default ShowCreators;