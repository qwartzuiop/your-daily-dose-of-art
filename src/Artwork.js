import React from 'react';

export function Artwork(props){
    const {item} = props;

    return(
        <div className={'artwork'}>
            <div className={'artwork__image'} style={{backgroundColor:`hsl(${item.color?.h},${item.color?.s}%,${item.color?.l}%)`}}>
                <img className={'image--background'} src={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`} alt={item.thumbnail?.alt_text} />
                <img className={'image'} src={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`} alt={item.thumbnail?.alt_text} />
            </div>
            <div className={'artwork__info'}>
                <h2 className={'artwork__info__title'}>{item.title}</h2>
                <div className={'artwork__info__subtitle'}>
                    <p className={'artwork__info__subtitle__artist'}>{item.artist_title}</p>
                    <p className={'artwork__info__subtitle__place-and-date'}>{item.place_of_origin}, {item.date_start}</p>
                </div>
                <p className={'artwork__info__medium'}><strong>Medium:</strong> {item.medium_display}</p>
                <p className={'artwork__info__dimensions'}><strong>Dimensions:</strong> {item.dimensions}</p>
                <p className={'artwork__info__credit'}><strong>Credit line:</strong> {item.credit_line}</p>
            </div>
        </div>
    )
}