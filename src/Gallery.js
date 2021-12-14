import React, {useState, useEffect} from "react";
import { Artwork } from './Artwork.js'

export function Gallery(){
    const [gallery, setGallery] = useState([]);

    const queries = ['modernism', 'japanese', 'modernism', 'american', 'chinese', '20th', '19th'];
    const fields = 'id,image_id,thumbnail,title,artist_title,place_of_origin,date_start,medium_display,dimensions,credit_line,color';
    const baseURL = `https://api.artic.edu/api/v1/artworks/`;

    useEffect(() => {
        fetch(`${baseURL}search?q=${queries[new Date().getDay()]}&page=${Math.floor(Math.random() * (100 - 1) + 1)}`)
            .then(response => response.json())
            .then(
                response => {
                    for (let i = 0; i < response.data.length; i++){
                        fetch(`${baseURL}${response.data[i].id}?fields=${fields}`)
                            .then(response => response.json())
                            .then(
                                function (response){
                                    setGallery(gallery => [...gallery, response.data]);
                                }
                            )
                    }
                },
                error => console.log(error)
            );
    },[]);

    return(
        <div className={'gallery'}>
            {gallery.length == 0 ? <div className={'loader'}></div> : null}
            {gallery.map((item, index) =>
                <Artwork item={item} key={index} />
            )}
        </div>
    )
};